import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceServerList: readonly ["https://verify.twilio.com"];
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    codeLength?: number;
    customCodeEnabled?: boolean;
    defaultTemplateSid?: string;
    doNotShareWarningEnabled?: boolean;
    dtmfInputRequired?: boolean;
    friendlyName: string;
    lookupEnabled?: boolean;
    psd2Enabled?: boolean;
    pushApnCredentialSid?: string;
    pushFcmCredentialSid?: string;
    pushIncludeDate?: boolean;
    skipSmsToLandlines?: boolean;
    totpCodeLength?: number;
    totpIssuer?: string;
    totpSkew?: number;
    totpTimeStep?: number;
    ttsName?: string;
}
export declare class CreateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateServiceCreateServiceRequest;
    security: CreateServiceSecurity;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2Service?: shared.VerifyV2Service;
}
