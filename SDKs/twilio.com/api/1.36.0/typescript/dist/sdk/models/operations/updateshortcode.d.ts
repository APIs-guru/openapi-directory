import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESHORTCODE_SERVERS: string[];
export declare class UpdateShortCodePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
    apiVersion?: string;
    friendlyName?: string;
    smsFallbackMethod?: UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum;
    smsUrl?: string;
}
export declare class UpdateShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateShortCodePathParams;
    request?: UpdateShortCodeUpdateShortCodeRequest;
    security: UpdateShortCodeSecurity;
}
export declare class UpdateShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountShortCode?: shared.ApiV2010AccountShortCode;
}
