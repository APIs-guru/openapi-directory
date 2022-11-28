import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateVerificationCheckServerList: readonly ["https://verify.twilio.com"];
export declare class CreateVerificationCheckPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateVerificationCheckCreateVerificationCheckRequest extends SpeakeasyBase {
    amount?: string;
    code?: string;
    payee?: string;
    to?: string;
    verificationSid?: string;
}
export declare class CreateVerificationCheckSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateVerificationCheckRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateVerificationCheckPathParams;
    request?: CreateVerificationCheckCreateVerificationCheckRequest;
    security: CreateVerificationCheckSecurity;
}
export declare class CreateVerificationCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceVerificationCheck?: shared.VerifyV2ServiceVerificationCheck;
}
