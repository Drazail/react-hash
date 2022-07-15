# react-hash

## Getting started

`$ npm install react-hash --save`

---

## Usage

### Constants

```
HashAlgorithms : Record<string, string>;
```

```
HmacAlgorithms : Record<string, string>;
```

#### Example

```javascript
import { CONSTANTS } from 'react-hash';

const hashAlgorithm = CONSTANTS.HashAlgorithms.sha256;

const hmacAlgorithm = CONSTANTS.HmacAlgorithms.HmacSHA512;

```
***
# Cross Platform API


if you are using something besides react, as `JSHash` and `JSHmac` are pure javaScript implementations they should work in any JS enviroment.
***


#### Hash Algorithm :

`"MD2" | "MD5"| "SHA-1"| "SHA-224" | "SHA-256" | "SHA-384" | "SHA-512"| "keccak"`

#### HMac Algorithm :

`"HmacMD5" | "HmacSHA1" | "HmacSHA224" | "HmacSHA256" | "HmacSHA384" | "HmacSHA512"`

#### API:

```
JSHash(message: string, algorithm: string):Promise<string>;
```
```
JSHmac(message: string, secret: string, algorithm: string): Promise<string>;
```

#### Example :

```javascript
import { JSHash, JSHmac, CONSTANTS } from "react-hash";

JSHash("message", CONSTANTS.HashAlgorithms.sha256)
  .then(hash => console.log(hash))
  .catch(e => console.log(e));

JSHmac("message", "SecretKey", CONSTANTS.HmacAlgorithms.HmacSHA256)
  .then(hash => console.log(hash))
  .catch(e => console.log(e));
```

- keccak implementation defaults to 512 and is not tested against all attack vectors.

***

# React Hooks

Following hooks are available:

```javaScript
export function useHash(
  hmacAlgo?: string = "MD5",
  initialMessage: ?string = "hello World",
): [
  hashed: string,
  setMessage: (message: string) => Promise<void>,
  setAlgo: (algo: string) => Promise<void>
];
```

```javaScript
export function useHmac(
  hmacAlgo?: string = "HmacMD5",
  initialMessage: ?string = "hello World",
  initialSecret: ?string = "SecretKey"
): [
  hashed: string,
  setMessage: (message: string) => Promise<void>,
  setAlgo: (algo: string) => Promise<void>,
  setSecret: (secret: string) => Promise<void>
];
```
## Usage

```javaScript
const [hashedMessage, setHashAlgo, setHashMessage] = useHash();
const [hmac, setHmacAlgo, setHmacMessage, setHmacSecret] = useHmac();
```

`hashedMessage` and `hmac` will update after a call to one of the setters is resolved.

note that all the setter functions of these two hooks are async and will return a `promise`.


---
#### Credits

Some modules of this package use Open Source code snippets. You can find the source code of their open source projects along with license information below. We acknowledge and are grateful to these developers for their contributions to open source.

- Project: crypto-es https://github.com/entronad/crypto-es

- License (MIT) https://github.com/entronad/crypto-es/blob/master/LICENSE

---
