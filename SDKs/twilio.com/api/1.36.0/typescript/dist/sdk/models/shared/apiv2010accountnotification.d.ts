import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ApiV2010AccountNotificationRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountNotification extends SpeakeasyBase {
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
    requestMethod?: ApiV2010AccountNotificationRequestMethodEnum;
    requestUrl?: string;
    sid?: string;
    uri?: string;
}
