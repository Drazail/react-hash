export namespace CONSTANTS {
  export namespace HashAlgorithms {
    export const md2: "MD2";
    export const md5: "MD5";
    export const sha1: "SHA-1";
    export const sha224: "SHA-224";
    export const sha256: "SHA-256";
    export const sha384: "SHA-384";
    export const sha512: "SHA-512";
    export const keccak: "keccak";
  }
  export namespace HmacAlgorithms {
    export const HmacMD5: "HmacMD5";
    export const HmacSHA1: "HmacSHA1";
    export const HmacSHA224: "HmacSHA224";
    export const HmacSHA256: "HmacSHA256";
    export const HmacSHA384: "HmacSHA384";
    export const HmacSHA512: "HmacSHA512";
    export const PBEwithHmacSHA: "PBEwithHmacSHA";
    export const PBEwithHmacSHA1: "PBEwithHmacSHA1";
    export const PBEwithHmacSHA224: "PBEwithHmacSHA224";
    export const PBEwithHmacSHA256: "PBEwithHmacSHA256";
    export const PBEwithHmacSHA384: "PBEwithHmacSHA384";
    export const PBEwithHmacSHA512: "PBEwithHmacSHA512";
  }
}

export function JSHash(message: string, algorithm: string): Promise<string>;

export function JSHmac(
  message: string,
  secret: string,
  algorithm: string
): Promise<string>;

export function useHash(
  hmacAlgo?: typeof CONSTANTS.HashAlgorithms[keyof typeof CONSTANTS.HashAlgorithms],
  initialMessage?: string
): [
  hashed: string,
  setMessage: (message: string) => Promise<void>,
  setAlgo: (algo: string) => Promise<void>
];

export function useHmac(
  hmacAlgo?: typeof CONSTANTS.HmacAlgorithms[keyof typeof CONSTANTS.HmacAlgorithms],
  initialMessage?: string,
  initialSecret?: string
): [
  hashed: string,
  setMessage: (message: string) => Promise<void>,
  setAlgo: (algo: string) => Promise<void>,
  setSecret: (secret: string) => Promise<void>
];
