export namespace CONSTANTS {
    export namespace HashAlgorithms {
        export const md2: string;
        export const md5: string;
        export const sha1: string;
        export const sha224: string;
        export const sha256: string;
        export const sha384: string;
        export const sha512: string;
        export const keccak: string;
    }
    export namespace HmacAlgorithms {
        export const HmacMD5: string;
        export const HmacSHA1: string;
        export const HmacSHA224: string;
        export const HmacSHA256: string;
        export const HmacSHA384: string;
        export const HmacSHA512: string;
        export const PBEwithHmacSHA: string;
        export const PBEwithHmacSHA1: string;
        export const PBEwithHmacSHA224: string;
        export const PBEwithHmacSHA256: string;
        export const PBEwithHmacSHA384: string;
        export const PBEwithHmacSHA512: string;
    }
}

export function JSHash(message: string, algorithm: string): Promise<string>;

export function JSHmac(message: string, secret: string, algorithm: string): Promise<string>;

export interface useHash{
    hashed: string;
    setMessage: (message: string)=> void;
    setAlgo: (algo:string)=>void;
}