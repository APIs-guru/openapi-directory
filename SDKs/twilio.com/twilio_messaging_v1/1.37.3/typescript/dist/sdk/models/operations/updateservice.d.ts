import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceServerList: readonly ["https://messaging.twilio.com"];
export declare class UpdateServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateServiceUpdateServiceRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    areaCodeGeomatch?: boolean;
    fallbackMethod?: UpdateServiceUpdateServiceRequestFallbackMethodEnum;
    fallbackToLongCode?: boolean;
    fallbackUrl?: string;
    friendlyName?: string;
    inboundMethod?: UpdateServiceUpdateServiceRequestInboundMethodEnum;
    inboundRequestUrl?: string;
    mmsConverter?: boolean;
    scanMessageContent?: shared.ServiceEnumScanMessageContentEnum;
    smartEncoding?: boolean;
    statusCallback?: string;
    stickySender?: boolean;
    synchronousValidation?: boolean;
    useInboundWebhookOnNumber?: boolean;
    usecase?: string;
    validityPeriod?: number;
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
    messagingV1Service?: shared.MessagingV1Service;
}
