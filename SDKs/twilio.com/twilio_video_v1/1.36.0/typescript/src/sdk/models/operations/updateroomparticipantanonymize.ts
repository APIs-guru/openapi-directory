import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEROOMPARTICIPANTANONYMIZE_SERVERS = [
	"https://video.twilio.com",
];



export class UpdateRoomParticipantAnonymizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRoomParticipantAnonymizeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomParticipantAnonymizeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRoomParticipantAnonymizePathParams;

  @Metadata()
  security: UpdateRoomParticipantAnonymizeSecurity;
}


export class UpdateRoomParticipantAnonymizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomParticipantRoomParticipantAnonymize?: shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize;
}
