import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECALL_SERVERS: string[];
export declare class CreateCallPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateCallCreateCallRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateCallCreateCallRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateCallCreateCallRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCallCreateCallRequest extends SpeakeasyBase {
    applicationSid?: string;
    asyncAmd?: string;
    asyncAmdStatusCallback?: string;
    asyncAmdStatusCallbackMethod?: CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum;
    byoc?: string;
    callReason?: string;
    callToken?: string;
    callerId?: string;
    fallbackMethod?: CreateCallCreateCallRequestFallbackMethodEnum;
    fallbackUrl?: string;
    from: string;
    machineDetection?: string;
    machineDetectionSilenceTimeout?: number;
    machineDetectionSpeechEndThreshold?: number;
    machineDetectionSpeechThreshold?: number;
    machineDetectionTimeout?: number;
    method?: CreateCallCreateCallRequestMethodEnum;
    record?: boolean;
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackEvent?: string[];
    recordingStatusCallbackMethod?: CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum;
    recordingTrack?: string;
    sendDigits?: string;
    sipAuthPassword?: string;
    sipAuthUsername?: string;
    statusCallback?: string;
    statusCallbackEvent?: string[];
    statusCallbackMethod?: CreateCallCreateCallRequestStatusCallbackMethodEnum;
    timeLimit?: number;
    timeout?: number;
    to: string;
    trim?: string;
    twiml?: string;
    url?: string;
}
export declare class CreateCallSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateCallPathParams;
    request?: CreateCallCreateCallRequest;
    security: CreateCallSecurity;
}
export declare class CreateCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
