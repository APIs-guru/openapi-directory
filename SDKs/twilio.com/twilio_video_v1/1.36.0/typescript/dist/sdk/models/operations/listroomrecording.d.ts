import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTROOMRECORDING_SERVERS: string[];
export declare class ListRoomRecordingPathParams extends SpeakeasyBase {
    roomSid: string;
}
export declare class ListRoomRecordingQueryParams extends SpeakeasyBase {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    sourceSid?: string;
    status?: shared.RoomRecordingEnumStatusEnum;
}
export declare class ListRoomRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRoomRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRoomRecordingPathParams;
    queryParams: ListRoomRecordingQueryParams;
    security: ListRoomRecordingSecurity;
}
export declare class ListRoomRecordingListRoomRecordingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRoomRecordingListRoomRecordingResponse extends SpeakeasyBase {
    meta?: ListRoomRecordingListRoomRecordingResponseMeta;
    recordings?: shared.VideoV1RoomRoomRecording[];
}
export declare class ListRoomRecordingResponse extends SpeakeasyBase {
    contentType: string;
    listRoomRecordingResponse?: ListRoomRecordingListRoomRecordingResponse;
    statusCode: number;
}
