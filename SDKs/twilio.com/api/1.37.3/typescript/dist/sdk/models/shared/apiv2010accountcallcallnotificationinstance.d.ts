import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountCallCallNotificationInstance extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    callSid?: string;
    dateCreated?: string;
    dateUpdated?: string;
    errorCode?: string;
    log?: string;
    messageDate?: string;
    messageText?: string;
    moreInfo?: string;
    requestMethod?: ApiV2010AccountCallCallNotificationInstanceRequestMethodEnum;
    requestUrl?: string;
    requestVariables?: string;
    responseBody?: string;
    responseHeaders?: string;
    sid?: string;
    uri?: string;
}
