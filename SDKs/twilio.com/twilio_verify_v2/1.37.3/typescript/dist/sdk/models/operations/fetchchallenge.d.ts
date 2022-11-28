import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchChallengeServerList: readonly ["https://verify.twilio.com"];
export declare class FetchChallengePathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchChallengeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchChallengeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchChallengePathParams;
    security: FetchChallengeSecurity;
}
export declare class FetchChallengeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntityChallenge?: shared.VerifyV2ServiceEntityChallenge;
}
