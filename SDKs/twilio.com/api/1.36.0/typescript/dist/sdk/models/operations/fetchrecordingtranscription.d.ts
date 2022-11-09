import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHRECORDINGTRANSCRIPTION_SERVERS: string[];
export declare class FetchRecordingTranscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
    recordingSid: string;
    sid: string;
}
export declare class FetchRecordingTranscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRecordingTranscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRecordingTranscriptionPathParams;
    security: FetchRecordingTranscriptionSecurity;
}
export declare class FetchRecordingTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountRecordingRecordingTranscription?: shared.ApiV2010AccountRecordingRecordingTranscription;
}
