import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiV2010AccountCallCallNotificationRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountCallCallNotification extends SpeakeasyBase {
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
    requestMethod?: ApiV2010AccountCallCallNotificationRequestMethodEnum;
    requestUrl?: string;
    sid?: string;
    uri?: string;
}
