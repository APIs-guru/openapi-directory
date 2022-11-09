import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHVERIFICATIONATTEMPT_SERVERS: string[];
export declare class FetchVerificationAttemptPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchVerificationAttemptSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVerificationAttemptRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVerificationAttemptPathParams;
    security: FetchVerificationAttemptSecurity;
}
export declare class FetchVerificationAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2VerificationAttempt?: shared.VerifyV2VerificationAttempt;
}
