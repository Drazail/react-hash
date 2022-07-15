import { CONSTANTS, useHash, useHmac } from "react-hash";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
function App() {
  const [hashAlgorithm, setHashAlgorithm] = useState("");
  const [hmacAlgorithm, setHmacAlgorithm] = useState("");
  console.log(useHash());
  const [hashedMessage, setHashAlgo, setHashMessage] = useHash();
  const [hmac, setHmacAlgo, setHmacMessage, setHmacSecret] = useHmac();

  const handleHashAlgorithmChange = (event) => {
    setHashAlgorithm(event.target.value);
    setHashAlgo(CONSTANTS.HashAlgorithms[event.target.value]);
  };

  const handleHMacAlgorithmChange = (event) => {
    setHmacAlgorithm(event.target.value);
    setHmacAlgo(CONSTANTS.HmacAlgorithms[event.target.value]);
  };

  const handleHashStringChange = (event) => {
    setHashMessage(event.target.value);
  };

  const handleHMacStringChange = (event) => {
    setHmacMessage(event.target.value);
  };

  const handleHMacSecretChange = (event) => {
    setHmacSecret(event.target.value);
  };

  return (
    <div style={{ alignItems: "center" }}>
      <div style={{ padding: 20 }}>
        <FormControl fullWidth>
          <InputLabel>Hash</InputLabel>
          <Select
            value={hashAlgorithm}
            label="Algorithm"
            onChange={handleHashAlgorithmChange}
          >
            {Object.keys(CONSTANTS.HashAlgorithms).map((element) => {
              return <MenuItem value={element}>{element}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <TextField
          label="message"
          fullWidth
          variant="outlined"
          style={{ marginTop: 20 }}
          onChange={handleHashStringChange}
        />
        <p>{hashedMessage}</p>
      </div>
      <div style={{ padding: 20 }}>
        <FormControl fullWidth>
          <InputLabel>HMac</InputLabel>
          <Select
            value={hmacAlgorithm}
            label="Algorithm"
            onChange={handleHMacAlgorithmChange}
          >
            {Object.keys(CONSTANTS.HmacAlgorithms).map((element) => {
              return <MenuItem value={element}>{element}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <TextField
          label="message"
          fullWidth
          variant="outlined"
          style={{ marginTop: 20 }}
          onChange={handleHMacStringChange}
        />
        <TextField
          label="secret"
          fullWidth
          variant="outlined"
          style={{ marginTop: 20 }}
          onChange={handleHMacSecretChange}
        />
        <p>{hmac}</p>
      </div>
    </div>
  );
}

export default App;
