# react-native-hash

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


if you are using expo, `JSHash` and `JSHmac` are pure javaScript implementations and should work in any enviroment.
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
import { JSHash, JSHmac, CONSTANTS } from "react-native-hash";

JSHash("message", CONSTANTS.HashAlgorithms.sha256)
  .then(hash => console.log(hash))
  .catch(e => console.log(e));

JSHmac("message", "SecretKey", CONSTANTS.HmacAlgorithms.HmacSHA256)
  .then(hash => console.log(hash))
  .catch(e => console.log(e));
```

- keccak implementation defaults to 512 and is not tested against all attack vectors.

check out the [example](https://github.com/Drazail/react-hash/blob/f992bdb09b1df5652a3b1590ca6e903a077ad4e6/example/App.js#L88-L90) for more information.

***

# React Hooks


---
#### Credits

JSHash and JSHMac functions use some Open Source code snippets. You can find the source code of their open source projects along with license information below. We acknowledge and are grateful to these developers for their contributions to open source.

- Project: crypto-es https://github.com/entronad/crypto-es

- License (MIT) https://github.com/entronad/crypto-es/blob/master/LICENSE

---
