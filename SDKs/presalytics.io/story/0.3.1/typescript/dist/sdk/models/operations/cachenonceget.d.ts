import { SpeakeasyBase } from "../../../internal/utils";
export declare class CacheNonceGetPathParams extends SpeakeasyBase {
    nonce: string;
}
export declare class CacheNonceGetRequest extends SpeakeasyBase {
    pathParams: CacheNonceGetPathParams;
}
export declare class CacheNonceGetResponse extends SpeakeasyBase {
    contentType: string;
    loginButton?: string;
    statusCode: number;
    problemDetail?: any;
}
