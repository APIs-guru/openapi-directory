import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateCallServerList: readonly ["https://api.twilio.com"];
export declare class UpdateCallPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateCallUpdateCallRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateCallUpdateCallRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateCallUpdateCallRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateCallUpdateCallRequest extends SpeakeasyBase {
    fallbackMethod?: UpdateCallUpdateCallRequestFallbackMethodEnum;
    fallbackUrl?: string;
    method?: UpdateCallUpdateCallRequestMethodEnum;
    status?: shared.CallEnumUpdateStatusEnum;
    statusCallback?: string;
    statusCallbackMethod?: UpdateCallUpdateCallRequestStatusCallbackMethodEnum;
    timeLimit?: number;
    twiml?: string;
    url?: string;
}
export declare class UpdateCallSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCallPathParams;
    request?: UpdateCallUpdateCallRequest;
    security: UpdateCallSecurity;
}
export declare class UpdateCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
