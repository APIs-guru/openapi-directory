import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostApiOauthAuthorizeQueryParams extends SpeakeasyBase {
    clientId: string;
    clientSecret?: string;
    redirectUri: string;
    scope?: string;
    state: string;
}
export declare class PostApiOauthAuthorizeRequest extends SpeakeasyBase {
    queryParams: PostApiOauthAuthorizeQueryParams;
}
export declare class PostApiOauthAuthorizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
