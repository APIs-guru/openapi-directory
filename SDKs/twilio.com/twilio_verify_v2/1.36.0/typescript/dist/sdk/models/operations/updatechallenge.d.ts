import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECHALLENGE_SERVERS: string[];
export declare class UpdateChallengePathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateChallengeUpdateChallengeRequest extends SpeakeasyBase {
    authPayload?: string;
    metadata?: any;
}
export declare class UpdateChallengeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateChallengeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateChallengePathParams;
    request?: UpdateChallengeUpdateChallengeRequest;
    security: UpdateChallengeSecurity;
}
export declare class UpdateChallengeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntityChallenge?: shared.VerifyV2ServiceEntityChallenge;
}
