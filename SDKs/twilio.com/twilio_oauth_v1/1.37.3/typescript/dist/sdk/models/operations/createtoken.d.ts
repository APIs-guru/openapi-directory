import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTokenServerList: readonly ["https://oauth.twilio.com"];
export declare class CreateTokenCreateTokenRequest extends SpeakeasyBase {
    clientSecret?: string;
    clientSid: string;
    code?: string;
    codeVerifier?: string;
    deviceCode?: string;
    deviceId?: string;
    grantType: string;
    refreshToken?: string;
}
export declare class CreateTokenSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateTokenCreateTokenRequest;
    security: CreateTokenSecurity;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oauthV1Token?: shared.OauthV1Token;
}
