import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MonitorV1AlertInstanceRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class MonitorV1AlertInstance extends SpeakeasyBase {
    accountSid?: string;
    alertText?: string;
    apiVersion?: string;
    dateCreated?: Date;
    dateGenerated?: Date;
    dateUpdated?: Date;
    errorCode?: string;
    logLevel?: string;
    moreInfo?: string;
    requestHeaders?: string;
    requestMethod?: MonitorV1AlertInstanceRequestMethodEnum;
    requestUrl?: string;
    requestVariables?: string;
    resourceSid?: string;
    responseBody?: string;
    responseHeaders?: string;
    serviceSid?: string;
    sid?: string;
    url?: string;
}
