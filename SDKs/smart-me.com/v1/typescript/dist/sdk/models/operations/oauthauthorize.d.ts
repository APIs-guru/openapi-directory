import { SpeakeasyBase } from "../../../internal/utils";
export declare class OAuthAuthorizeQueryParams extends SpeakeasyBase {
    clientId: string;
    clientSecret?: string;
    redirectUri: string;
    scope?: string;
    state: string;
}
export declare class OAuthAuthorizeRequest extends SpeakeasyBase {
    queryParams: OAuthAuthorizeQueryParams;
}
export declare class OAuthAuthorizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
