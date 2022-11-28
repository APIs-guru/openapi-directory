import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRecordingServerList: readonly ["https://video.twilio.com"];
export declare class FetchRecordingPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRecordingPathParams;
    security: FetchRecordingSecurity;
}
export declare class FetchRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1Recording?: shared.VideoV1Recording;
}
