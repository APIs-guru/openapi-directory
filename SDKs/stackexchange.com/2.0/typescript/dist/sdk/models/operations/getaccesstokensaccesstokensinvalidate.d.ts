import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccessTokensAccessTokensInvalidatePathParams extends SpeakeasyBase {
    accessTokens: string;
}
export declare class GetAccessTokensAccessTokensInvalidateQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetAccessTokensAccessTokensInvalidateRequest extends SpeakeasyBase {
    pathParams: GetAccessTokensAccessTokensInvalidatePathParams;
    queryParams: GetAccessTokensAccessTokensInvalidateQueryParams;
}
export declare class GetAccessTokensAccessTokensInvalidateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
