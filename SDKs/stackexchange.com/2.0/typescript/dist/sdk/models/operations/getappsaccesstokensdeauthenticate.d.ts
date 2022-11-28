import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAppsAccessTokensDeAuthenticatePathParams extends SpeakeasyBase {
    accessTokens: string;
}
export declare class GetAppsAccessTokensDeAuthenticateQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetAppsAccessTokensDeAuthenticateRequest extends SpeakeasyBase {
    pathParams: GetAppsAccessTokensDeAuthenticatePathParams;
    queryParams: GetAppsAccessTokensDeAuthenticateQueryParams;
}
export declare class GetAppsAccessTokensDeAuthenticateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
