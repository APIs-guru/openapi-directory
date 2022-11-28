import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConvertAccessTokenRequestBodyGrantTypeEnum {
    VimeoOauth1 = "vimeo_oauth1"
}
export declare class ConvertAccessTokenRequestBody extends SpeakeasyBase {
    grantType: ConvertAccessTokenRequestBodyGrantTypeEnum;
    token: string;
    tokenSecret: string;
}
export declare class ConvertAccessTokenRequest extends SpeakeasyBase {
    request: ConvertAccessTokenRequestBody;
}
export declare class ConvertAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    auth?: shared.Auth;
    authError?: shared.AuthError;
}
