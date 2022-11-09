import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEROOMPARTICIPANT_SERVERS = [
	"https://video.twilio.com",
];



export class UpdateRoomParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRoomParticipantUpdateRoomParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status?: shared.RoomParticipantEnumStatusEnum;
}


export class UpdateRoomParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRoomParticipantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRoomParticipantUpdateRoomParticipantRequest;

  @Metadata()
  security: UpdateRoomParticipantSecurity;
}


export class UpdateRoomParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomParticipant?: shared.VideoV1RoomRoomParticipant;
}
