import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRoomParticipantPublishedTrackServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomParticipantPublishedTrackPathParams extends SpeakeasyBase {
    participantSid: string;
    roomSid: string;
    sid: string;
}
export declare class FetchRoomParticipantPublishedTrackSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoomParticipantPublishedTrackRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRoomParticipantPublishedTrackPathParams;
    security: FetchRoomParticipantPublishedTrackSecurity;
}
export declare class FetchRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomParticipantRoomParticipantPublishedTrack?: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack;
}
