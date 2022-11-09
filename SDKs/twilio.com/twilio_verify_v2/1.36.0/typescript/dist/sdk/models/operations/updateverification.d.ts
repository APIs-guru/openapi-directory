import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEVERIFICATION_SERVERS: string[];
export declare class UpdateVerificationPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateVerificationUpdateVerificationRequest extends SpeakeasyBase {
    status: shared.VerificationEnumStatusEnum;
}
export declare class UpdateVerificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateVerificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateVerificationPathParams;
    request?: UpdateVerificationUpdateVerificationRequest;
    security: UpdateVerificationSecurity;
}
export declare class UpdateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
