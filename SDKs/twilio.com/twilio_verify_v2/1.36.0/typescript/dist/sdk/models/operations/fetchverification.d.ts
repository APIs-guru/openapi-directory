import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHVERIFICATION_SERVERS: string[];
export declare class FetchVerificationPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchVerificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVerificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVerificationPathParams;
    security: FetchVerificationSecurity;
}
export declare class FetchVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
