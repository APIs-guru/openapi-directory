import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateNewFactorServerList: readonly ["https://verify.twilio.com"];
export declare class CreateNewFactorPathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
}
export declare class CreateNewFactorCreateNewFactorRequest extends SpeakeasyBase {
    bindingAlg?: string;
    bindingPublicKey?: string;
    bindingSecret?: string;
    configAlg?: shared.NewFactorEnumTotpAlgorithmsEnum;
    configAppId?: string;
    configCodeLength?: number;
    configNotificationPlatform?: shared.NewFactorEnumNotificationPlatformsEnum;
    configNotificationToken?: string;
    configSdkVersion?: string;
    configSkew?: number;
    configTimeStep?: number;
    factorType: shared.NewFactorEnumFactorTypesEnum;
    friendlyName: string;
    metadata?: any;
}
export declare class CreateNewFactorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateNewFactorRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateNewFactorPathParams;
    request?: CreateNewFactorCreateNewFactorRequest;
    security: CreateNewFactorSecurity;
}
export declare class CreateNewFactorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntityNewFactor?: shared.VerifyV2ServiceEntityNewFactor;
}
