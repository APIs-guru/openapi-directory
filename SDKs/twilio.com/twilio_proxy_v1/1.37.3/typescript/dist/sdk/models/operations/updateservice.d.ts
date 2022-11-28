import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdateServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    callbackUrl?: string;
    chatInstanceSid?: string;
    defaultTtl?: number;
    geoMatchLevel?: shared.ServiceEnumGeoMatchLevelEnum;
    interceptCallbackUrl?: string;
    numberSelectionBehavior?: shared.ServiceEnumNumberSelectionBehaviorEnum;
    outOfSessionCallbackUrl?: string;
    uniqueName?: string;
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
    proxyV1Service?: shared.ProxyV1Service;
}
