import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCALLRECORDING_SERVERS: string[];
export declare class FetchCallRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class FetchCallRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCallRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCallRecordingPathParams;
    security: FetchCallRecordingSecurity;
}
export declare class FetchCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallRecording?: shared.ApiV2010AccountCallCallRecording;
}
