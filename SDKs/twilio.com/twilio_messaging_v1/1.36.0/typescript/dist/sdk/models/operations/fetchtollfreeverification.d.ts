import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTOLLFREEVERIFICATION_SERVERS: string[];
export declare class FetchTollfreeVerificationPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchTollfreeVerificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTollfreeVerificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTollfreeVerificationPathParams;
    security: FetchTollfreeVerificationSecurity;
}
export declare class FetchTollfreeVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1TollfreeVerification?: shared.MessagingV1TollfreeVerification;
}
