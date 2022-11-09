import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHROOMPARTICIPANTSUBSCRIBEDTRACK_SERVERS: string[];
export declare class FetchRoomParticipantSubscribedTrackPathParams extends SpeakeasyBase {
    participantSid: string;
    roomSid: string;
    sid: string;
}
export declare class FetchRoomParticipantSubscribedTrackSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoomParticipantSubscribedTrackRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRoomParticipantSubscribedTrackPathParams;
    security: FetchRoomParticipantSubscribedTrackSecurity;
}
export declare class FetchRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomParticipantRoomParticipantSubscribedTrack?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack;
}
