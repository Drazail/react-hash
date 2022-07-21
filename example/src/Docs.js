import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";

export default function Docs() {
  return (
    <div style={{ width: window.innerWidth / 1.1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Constants</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">{`typeDef:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <Typography variant="body2">{`HashAlgorithms : Record< string, string>`}</Typography>
            <Typography variant="body2">{`HmacAlgorithms : Record<string, string>;`}</Typography>
          </Paper>
          <br />
          <Typography variant="h6">{`Example:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <code>
              <Typography variant="body2">{`import { CONSTANTS } from 'react-hash';`}</Typography>
              <Typography variant="body2">{`const hashAlgorithm = CONSTANTS.HashAlgorithms.sha256;`}</Typography>
              <Typography variant="body2">{`const hmacAlgorithm = CONSTANTS.HmacAlgorithms.HmacSHA512;`}</Typography>
            </code>
          </Paper>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">JS Hash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">{`typeDef:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <Typography variant="body2">{`JSHash(message: string, algorithm: string):Promise<string>;`}</Typography>
          </Paper>
          <br />
          <Typography variant="h6">{`Example:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <code>
              <Typography variant="body2">{`import { JSHash, CONSTANTS } from "react-hash";`}</Typography>
              <Typography variant="body2">{`JSHash("message", CONSTANTS.HashAlgorithms.sha256)`}</Typography>
              <Typography variant="body2">{`.then(hash => console.log(hash))`}</Typography>
              <Typography variant="body2">{`.catch(e => console.log(e));`}</Typography>
            </code>
          </Paper>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">JS Hmac</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="h6">{`typeDef:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <Typography variant="body2">{`JSHmac(message: string, secret: string, algorithm: string): Promise<string>;`}</Typography>
          </Paper>
          <br />
          <Typography variant="h6">{`Example:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <code>
              <Typography variant="body2">{`import { JSHmac, CONSTANTS } from "react-hash";`}</Typography>
              <Typography variant="body2">{`JSHmac("message", "SecretKey", CONSTANTS.HmacAlgorithms.HmacSHA256)`}</Typography>
              <Typography variant="body2">{`.then(hash => console.log(hmac))`}</Typography>
              <Typography variant="body2">{`.catch(e => console.log(e));`}</Typography>
            </code>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">useHash</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="h6">{`typeDef:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <Typography variant="body2">{`useHash(
              hmacAlgo?: string = "MD5",
              initialMessage: ?string = "hello World",
            ): [
              hashed: string,
              setMessage: (message: string) => Promise<void>,
              setAlgo: (algo: string) => Promise<void>
            ];`}</Typography>
          </Paper>
          <br />
          <Typography variant="h6">{`Example:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <code>
              <Typography variant="body2">{`import { useHash } from "react-hash";`}</Typography>
              <Typography variant="body2">{`const [hashedMessage, setHashAlgo, setHashMessage] = useHash();`}</Typography>
            </code>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">useHmack</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="h6">{`typeDef:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <Typography variant="body2">{`useHmac(
                hmacAlgo?: string = "HmacMD5",
                initialMessage: ?string = "hello World",
                initialSecret: ?string = "SecretKey"
              ): [
                hmac: string,
                setMessage: (message: string) => Promise<void>,
                setAlgo: (algo: string) => Promise<void>,
                setSecret: (secret: string) => Promise<void>
              ];`}</Typography>
          </Paper>
          <br />
          <Typography variant="h6">{`Example:`}</Typography>
          <br />
          <Paper elevation={2} style={{ padding: 10 }}>
            <code>
              <Typography variant="body2">{`import { useHmac } from "react-hash";`}</Typography>
              <Typography variant="body2">{`const [hmac, setHmacAlgo, setHmacMessage, setHmacSecret] = useHmac();`}</Typography>
            </code>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
