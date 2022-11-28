import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExchangeAuthCodeRequestBodyGrantTypeEnum {
    AuthorizationCode = "authorization_code"
}
export declare class ExchangeAuthCodeRequestBody extends SpeakeasyBase {
    code: string;
    grantType: ExchangeAuthCodeRequestBodyGrantTypeEnum;
    redirectUri: string;
}
export declare class ExchangeAuthCodeRequest extends SpeakeasyBase {
    request: ExchangeAuthCodeRequestBody;
}
export declare class ExchangeAuthCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    auth?: shared.Auth;
    authError?: shared.AuthError;
}
