import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchRoomParticipantSubscribedTrackServerList = [
	"https://video.twilio.com",
] as const;


export class FetchRoomParticipantSubscribedTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchRoomParticipantSubscribedTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRoomParticipantSubscribedTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchRoomParticipantSubscribedTrackPathParams;

  @SpeakeasyMetadata()
  security: FetchRoomParticipantSubscribedTrackSecurity;
}


export class FetchRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1RoomRoomParticipantRoomParticipantSubscribedTrack?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack;
}
