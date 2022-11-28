import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class UpdateConnectAppPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateConnectAppUpdateConnectAppRequest extends SpeakeasyBase {
    authorizeRedirectUrl?: string;
    companyName?: string;
    deauthorizeCallbackMethod?: UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum;
    deauthorizeCallbackUrl?: string;
    description?: string;
    friendlyName?: string;
    homepageUrl?: string;
    permissions?: shared.ConnectAppEnumPermissionEnum[];
}
export declare class UpdateConnectAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConnectAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConnectAppPathParams;
    request?: UpdateConnectAppUpdateConnectAppRequest;
    security: UpdateConnectAppSecurity;
}
export declare class UpdateConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConnectApp?: shared.ApiV2010AccountConnectApp;
}
