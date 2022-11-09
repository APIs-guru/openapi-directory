import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEMEDIAPROCESSOR_SERVERS: string[];
export declare enum CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateMediaProcessorCreateMediaProcessorRequest extends SpeakeasyBase {
    extension: string;
    extensionContext: string;
    extensionEnvironment?: any;
    maxDuration?: number;
    statusCallback?: string;
    statusCallbackMethod?: CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
}
export declare class CreateMediaProcessorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMediaProcessorRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateMediaProcessorCreateMediaProcessorRequest;
    security: CreateMediaProcessorSecurity;
}
export declare class CreateMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
