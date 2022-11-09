import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONFERENCERECORDING_SERVERS: string[];
export declare class FetchConferenceRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    conferenceSid: string;
    sid: string;
}
export declare class FetchConferenceRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConferenceRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConferenceRecordingPathParams;
    security: FetchConferenceRecordingSecurity;
}
export declare class FetchConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConferenceConferenceRecording?: shared.ApiV2010AccountConferenceConferenceRecording;
}
