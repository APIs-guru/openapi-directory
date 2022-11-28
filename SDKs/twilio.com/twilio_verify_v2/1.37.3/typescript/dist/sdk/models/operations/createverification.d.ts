import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateVerificationServerList: readonly ["https://verify.twilio.com"];
export declare class CreateVerificationPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateVerificationCreateVerificationRequest extends SpeakeasyBase {
    amount?: string;
    appHash?: string;
    channel: string;
    channelConfiguration?: any;
    customCode?: string;
    customFriendlyName?: string;
    customMessage?: string;
    locale?: string;
    payee?: string;
    rateLimits?: any;
    sendDigits?: string;
    templateCustomSubstitutions?: string;
    templateSid?: string;
    to: string;
}
export declare class CreateVerificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateVerificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateVerificationPathParams;
    request?: CreateVerificationCreateVerificationRequest;
    security: CreateVerificationSecurity;
}
export declare class CreateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
