import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRecordingServerList: readonly ["https://api.twilio.com"];
export declare class FetchRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchRecordingQueryParams extends SpeakeasyBase {
    includeSoftDeleted?: boolean;
}
export declare class FetchRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRecordingPathParams;
    queryParams: FetchRecordingQueryParams;
    security: FetchRecordingSecurity;
}
export declare class FetchRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountRecording?: shared.ApiV2010AccountRecording;
}
