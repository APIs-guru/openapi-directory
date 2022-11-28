import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    callbackUrl?: string;
    chatInstanceSid?: string;
    defaultTtl?: number;
    geoMatchLevel?: shared.ServiceEnumGeoMatchLevelEnum;
    interceptCallbackUrl?: string;
    numberSelectionBehavior?: shared.ServiceEnumNumberSelectionBehaviorEnum;
    outOfSessionCallbackUrl?: string;
    uniqueName: string;
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
    proxyV1Service?: shared.ProxyV1Service;
}
