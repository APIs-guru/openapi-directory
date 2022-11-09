import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESERVICE_SERVERS: string[];
export declare enum CreateServiceCreateServiceRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateServiceCreateServiceRequestInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    areaCodeGeomatch?: boolean;
    fallbackMethod?: CreateServiceCreateServiceRequestFallbackMethodEnum;
    fallbackToLongCode?: boolean;
    fallbackUrl?: string;
    friendlyName: string;
    inboundMethod?: CreateServiceCreateServiceRequestInboundMethodEnum;
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
    messagingV1Service?: shared.MessagingV1Service;
}
