import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiV2010AccountShortCodeSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountShortCodeSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountShortCode extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    dateCreated?: string;
    dateUpdated?: string;
    friendlyName?: string;
    shortCode?: string;
    sid?: string;
    smsFallbackMethod?: ApiV2010AccountShortCodeSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: ApiV2010AccountShortCodeSmsMethodEnum;
    smsUrl?: string;
    uri?: string;
}
