import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEVALIDATIONREQUEST_SERVERS: string[];
export declare class CreateValidationRequestPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateValidationRequestCreateValidationRequestRequest extends SpeakeasyBase {
    callDelay?: number;
    extension?: string;
    friendlyName?: string;
    phoneNumber: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum;
}
export declare class CreateValidationRequestSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateValidationRequestRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateValidationRequestPathParams;
    request?: CreateValidationRequestCreateValidationRequestRequest;
    security: CreateValidationRequestSecurity;
}
export declare class CreateValidationRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountValidationRequest?: shared.ApiV2010AccountValidationRequest;
}
