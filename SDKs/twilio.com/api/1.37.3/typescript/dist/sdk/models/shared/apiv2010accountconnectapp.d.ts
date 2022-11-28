import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectAppEnumPermissionEnum } from "./connectappenumpermissionenum";
export declare enum ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountConnectApp extends SpeakeasyBase {
    accountSid?: string;
    authorizeRedirectUrl?: string;
    companyName?: string;
    deauthorizeCallbackMethod?: ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum;
    deauthorizeCallbackUrl?: string;
    description?: string;
    friendlyName?: string;
    homepageUrl?: string;
    permissions?: ConnectAppEnumPermissionEnum[];
    sid?: string;
    uri?: string;
}
