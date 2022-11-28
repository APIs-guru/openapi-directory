import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListRoomParticipantSubscribedTrackServerList: readonly ["https://video.twilio.com"];
export declare class ListRoomParticipantSubscribedTrackPathParams extends SpeakeasyBase {
    participantSid: string;
    roomSid: string;
}
export declare class ListRoomParticipantSubscribedTrackQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRoomParticipantSubscribedTrackSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
    meta?: ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta;
    subscribedTracks?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack[];
}
export declare class ListRoomParticipantSubscribedTrackRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRoomParticipantSubscribedTrackPathParams;
    queryParams: ListRoomParticipantSubscribedTrackQueryParams;
    security: ListRoomParticipantSubscribedTrackSecurity;
}
export declare class ListRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
    contentType: string;
    listRoomParticipantSubscribedTrackResponse?: ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse;
    statusCode: number;
}
