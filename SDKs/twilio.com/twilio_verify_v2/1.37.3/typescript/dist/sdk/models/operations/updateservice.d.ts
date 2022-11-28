import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    codeLength?: number;
    customCodeEnabled?: boolean;
    defaultTemplateSid?: string;
    doNotShareWarningEnabled?: boolean;
    dtmfInputRequired?: boolean;
    friendlyName?: string;
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
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServicePathParams;
    request?: UpdateServiceUpdateServiceRequest;
    security: UpdateServiceSecurity;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2Service?: shared.VerifyV2Service;
}
