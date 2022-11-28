import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateVerificationServerList: readonly ["https://verify.twilio.com"];
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
