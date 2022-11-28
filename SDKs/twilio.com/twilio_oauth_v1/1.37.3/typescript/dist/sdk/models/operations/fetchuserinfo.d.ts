import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUserInfoServerList: readonly ["https://oauth.twilio.com"];
export declare class FetchUserInfoSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUserInfoRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchUserInfoSecurity;
}
export declare class FetchUserInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oauthV1UserInfo?: shared.OauthV1UserInfo;
}
