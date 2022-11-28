import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateChallengeServerList: readonly ["https://verify.twilio.com"];
export declare class CreateChallengePathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
}
export declare class CreateChallengeCreateChallengeRequest extends SpeakeasyBase {
    authPayload?: string;
    detailsFields?: any[];
    detailsMessage?: string;
    expirationDate?: Date;
    factorSid: string;
    hiddenDetails?: any;
}
export declare class CreateChallengeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateChallengeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateChallengePathParams;
    request?: CreateChallengeCreateChallengeRequest;
    security: CreateChallengeSecurity;
}
export declare class CreateChallengeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntityChallenge?: shared.VerifyV2ServiceEntityChallenge;
}
