import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCallRecordingServerList: readonly ["https://api.twilio.com"];
export declare class CreateCallRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare enum CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCallRecordingCreateCallRecordingRequest extends SpeakeasyBase {
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackEvent?: string[];
    recordingStatusCallbackMethod?: CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum;
    recordingTrack?: string;
    trim?: string;
}
export declare class CreateCallRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCallRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateCallRecordingPathParams;
    request?: CreateCallRecordingCreateCallRecordingRequest;
    security: CreateCallRecordingSecurity;
}
export declare class CreateCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
