import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMediaRecordingServerList: readonly ["https://media.twilio.com"];
export declare class FetchMediaRecordingPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchMediaRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMediaRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMediaRecordingPathParams;
    security: FetchMediaRecordingSecurity;
}
export declare class FetchMediaRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1MediaRecording?: shared.MediaV1MediaRecording;
}
