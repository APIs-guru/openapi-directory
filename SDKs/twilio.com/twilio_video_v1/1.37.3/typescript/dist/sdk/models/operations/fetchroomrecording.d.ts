import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRoomRecordingServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomRecordingPathParams extends SpeakeasyBase {
    roomSid: string;
    sid: string;
}
export declare class FetchRoomRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoomRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRoomRecordingPathParams;
    security: FetchRoomRecordingSecurity;
}
export declare class FetchRoomRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomRecording?: shared.VideoV1RoomRoomRecording;
}
