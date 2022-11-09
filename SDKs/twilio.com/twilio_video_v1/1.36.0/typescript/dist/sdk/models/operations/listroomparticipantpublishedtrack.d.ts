import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTROOMPARTICIPANTPUBLISHEDTRACK_SERVERS: string[];
export declare class ListRoomParticipantPublishedTrackPathParams extends SpeakeasyBase {
    participantSid: string;
    roomSid: string;
}
export declare class ListRoomParticipantPublishedTrackQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRoomParticipantPublishedTrackSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRoomParticipantPublishedTrackRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRoomParticipantPublishedTrackPathParams;
    queryParams: ListRoomParticipantPublishedTrackQueryParams;
    security: ListRoomParticipantPublishedTrackSecurity;
}
export declare class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
    meta?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta;
    publishedTracks?: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack[];
}
export declare class ListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
    contentType: string;
    listRoomParticipantPublishedTrackResponse?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse;
    statusCode: number;
}
