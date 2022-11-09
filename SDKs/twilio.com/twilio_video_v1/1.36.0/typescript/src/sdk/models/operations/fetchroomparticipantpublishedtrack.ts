import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHROOMPARTICIPANTPUBLISHEDTRACK_SERVERS = [
	"https://video.twilio.com",
];



export class FetchRoomParticipantPublishedTrackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchRoomParticipantPublishedTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRoomParticipantPublishedTrackRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchRoomParticipantPublishedTrackPathParams;

  @Metadata()
  security: FetchRoomParticipantPublishedTrackSecurity;
}


export class FetchRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomParticipantRoomParticipantPublishedTrack?: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack;
}
