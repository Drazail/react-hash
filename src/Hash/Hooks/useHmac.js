import React, { useState, useEffect } from "react";
import hmacString from "../JSHmac";
import CONSTANTS from "../../../Constants";
const useHmac = (
  hmacAlgo = CONSTANTS.HmacAlgorithms.HmacMD5,
  initialMessage = "hello World",
  initialSecret = "SecretKey"
) => {
  const [Algo, setAlgo] = useState(hmacAlgo);
  const [message, setMessage] = useState(initialMessage);
  const [secret, setSecret] = useState(initialSecret);
  const [hmaced, setHmaced] = useState();
  useEffect(() => {
    const hmac = () =>
      hmacString(message, secret, Algo)
        .then((a) => setHmaced(a))
        .catch((er) => {
          console.error(er);
        });
    hmac();
  }, [message, secret, Algo]);

  return [hmaced, setAlgo, setMessage, setSecret];
};

export default useHmac;
