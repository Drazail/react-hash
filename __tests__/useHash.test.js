import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react/pure";
import { act } from "react-test-renderer";
import useHash from "./../src/Hash/Hooks/useHash";
import CONSTANTS from "../Constants";

test("should use hook", async () => {
  const { result } = renderHook(() => useHash());

  expect(typeof result.current.setAlgo).toBe("function");
  expect(typeof result.current.setMessage).toBe("function");
  await waitFor(() =>
    expect(result.current.hashed).toBe("39d11ab1c3c6c9eab3f5b3675f438dbf")
  );
});

test("should use initial message", async () => {
  const { result } = renderHook(() => useHash(CONSTANTS.HashAlgorithms.md5, "testMessage"));
  await waitFor(() =>
    expect(result.current.hashed).toBe("c703b927a0c5d56e5a33c4b834053bd4")
  );
});

test("should update message", async () => {
  const { result } = renderHook(() => useHash(CONSTANTS.HashAlgorithms.md5));

  await waitFor(() =>
    expect(result.current.hashed).toBe("39d11ab1c3c6c9eab3f5b3675f438dbf")
  );
  act(() => result.current.setMessage("testMessage1"));
  await waitFor(() =>
    expect(result.current.hashed).toBe("dccf67b5b214dc38e729958f6a6be829")
  );
  act(() => result.current.setMessage("testMessage2"));
  await waitFor(() =>
    expect(result.current.hashed).toBe("1ddfe493cdf4176866742a4afa04c840")
  );
});

test("should update algo", async () => {
    const { result } = renderHook(() => useHash(CONSTANTS.HashAlgorithms.md5, "testMessage"));
  
    await waitFor(() =>
      expect(result.current.hashed).toBe("c703b927a0c5d56e5a33c4b834053bd4")
    );
    act(() => result.current.setAlgo(CONSTANTS.HashAlgorithms.sha1));
    await waitFor(() =>
      expect(result.current.hashed).toBe("d2581121a80ea419e91878d321100cc99dfb21db")
    );
  });
