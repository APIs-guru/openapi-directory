import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchAccessTokenServerList: readonly ["https://verify.twilio.com"];
export declare class FetchAccessTokenPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchAccessTokenSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAccessTokenRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAccessTokenPathParams;
    security: FetchAccessTokenSecurity;
}
export declare class FetchAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceAccessToken?: shared.VerifyV2ServiceAccessToken;
}
