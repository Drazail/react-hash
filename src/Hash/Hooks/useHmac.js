import React, { useState, useEffect } from "react";
import hmacString from "../JSHmac";
import CONSTANTS from "../../../Constants";
const useHmac = (hmacAlgo = CONSTANTS.HmacAlgorithms.HmacMD5, initialMessage = "hello World", initialSecret = "SecretKey") => {
  const [Algo, setAlgo] = useState(hmacAlgo);
  const [message, setMessage] = useState(initialMessage);
  const [secret, setSecret] = useState(initialSecret);
  const [hmacked, setHmaced] = useState();
  useEffect(() => {
    const hmack = () =>
      hmacString(message, secret, Algo)
        .then((a) => setHmaced(a))
        .catch((er) => {
          console.error(er);
        });
    hmack();
  }, [message,secret,Algo]);

  return { hmacked, setAlgo, setMessage, setSecret };
};

export default useHmac;
