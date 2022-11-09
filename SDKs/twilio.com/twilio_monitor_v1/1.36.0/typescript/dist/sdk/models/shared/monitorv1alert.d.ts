import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MonitorV1AlertRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class MonitorV1Alert extends SpeakeasyBase {
    accountSid?: string;
    alertText?: string;
    apiVersion?: string;
    dateCreated?: Date;
    dateGenerated?: Date;
    dateUpdated?: Date;
    errorCode?: string;
    logLevel?: string;
    moreInfo?: string;
    requestMethod?: MonitorV1AlertRequestMethodEnum;
    requestUrl?: string;
    resourceSid?: string;
    serviceSid?: string;
    sid?: string;
    url?: string;
}
