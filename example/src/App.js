import "./App.css";
import { CONSTANTS } from "react-hash";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
function App() {

  const [HashAlgorithm, setHashAlgorithm] = useState('');
  const [HmacAlgorithm, setHmacAlgorithm] = useState('')

  const handleHashAlgorithmChange = (event) => {
    setHashAlgorithm(event.target.value);
  };

  const handleHMacAlgorithmChange = (event) => {
    setHmacAlgorithm(event.target.value);
  };

  return (
    <div style={{alignItems:'center'}}>
        <div style={{padding:20}}>
            <FormControl fullWidth>
              <InputLabel>Hash</InputLabel>
              <Select
                value={HashAlgorithm}
                label="Algorithm"
                onChange={handleHashAlgorithmChange}
              >
                {Object.keys(CONSTANTS.HashAlgorithms).map(element => {
                  return(<MenuItem value={element}>{element}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </div>
          <div style={{padding:20}}>
            <FormControl fullWidth>
              <InputLabel>HMac</InputLabel>
              <Select
                value={HmacAlgorithm}
                label="Algorithm"
                onChange={handleHMacAlgorithmChange}
              >
                {Object.keys(CONSTANTS.HmacAlgorithms).map(element => {
                  return(<MenuItem value={element}>{element}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </div>
    </div>
  );
}

export default App;
