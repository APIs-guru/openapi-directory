import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHROOMPARTICIPANTSUBSCRIBEDTRACK_SERVERS = [
	"https://video.twilio.com",
];



export class FetchRoomParticipantSubscribedTrackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchRoomParticipantSubscribedTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRoomParticipantSubscribedTrackRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchRoomParticipantSubscribedTrackPathParams;

  @Metadata()
  security: FetchRoomParticipantSubscribedTrackSecurity;
}


export class FetchRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomParticipantRoomParticipantSubscribedTrack?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack;
}
