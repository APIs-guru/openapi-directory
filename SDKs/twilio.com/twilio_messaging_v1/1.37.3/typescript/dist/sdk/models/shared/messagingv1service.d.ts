import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceEnumScanMessageContentEnum } from "./serviceenumscanmessagecontentenum";
export declare enum MessagingV1ServiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum MessagingV1ServiceInboundMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class MessagingV1Service extends SpeakeasyBase {
    accountSid?: string;
    areaCodeGeomatch?: boolean;
    dateCreated?: Date;
    dateUpdated?: Date;
    fallbackMethod?: MessagingV1ServiceFallbackMethodEnum;
    fallbackToLongCode?: boolean;
    fallbackUrl?: string;
    friendlyName?: string;
    inboundMethod?: MessagingV1ServiceInboundMethodEnum;
    inboundRequestUrl?: string;
    links?: Map<string, any>;
    mmsConverter?: boolean;
    scanMessageContent?: ServiceEnumScanMessageContentEnum;
    sid?: string;
    smartEncoding?: boolean;
    statusCallback?: string;
    stickySender?: boolean;
    synchronousValidation?: boolean;
    url?: string;
    usAppToPersonRegistered?: boolean;
    useInboundWebhookOnNumber?: boolean;
    usecase?: string;
    validityPeriod?: number;
}
