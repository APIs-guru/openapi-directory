import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccessTokensAccessTokensPathParams extends SpeakeasyBase {
    accessTokens: string;
}
export declare class GetAccessTokensAccessTokensQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetAccessTokensAccessTokensRequest extends SpeakeasyBase {
    pathParams: GetAccessTokensAccessTokensPathParams;
    queryParams: GetAccessTokensAccessTokensQueryParams;
}
export declare class GetAccessTokensAccessTokensResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
