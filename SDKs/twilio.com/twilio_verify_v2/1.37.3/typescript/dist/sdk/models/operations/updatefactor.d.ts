import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateFactorServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateFactorPathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
    sid: string;
}
export declare class UpdateFactorUpdateFactorRequest extends SpeakeasyBase {
    authPayload?: string;
    configAlg?: shared.FactorEnumTotpAlgorithmsEnum;
    configCodeLength?: number;
    configNotificationPlatform?: string;
    configNotificationToken?: string;
    configSdkVersion?: string;
    configSkew?: number;
    configTimeStep?: number;
    friendlyName?: string;
}
export declare class UpdateFactorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateFactorRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFactorPathParams;
    request?: UpdateFactorUpdateFactorRequest;
    security: UpdateFactorSecurity;
}
export declare class UpdateFactorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntityFactor?: shared.VerifyV2ServiceEntityFactor;
}
