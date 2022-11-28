import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateRoomParticipantServerList = [
	"https://video.twilio.com",
] as const;


export class UpdateRoomParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRoomParticipantUpdateRoomParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.RoomParticipantEnumStatusEnum;
}


export class UpdateRoomParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateRoomParticipantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRoomParticipantUpdateRoomParticipantRequest;

  @SpeakeasyMetadata()
  security: UpdateRoomParticipantSecurity;
}


export class UpdateRoomParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1RoomRoomParticipant?: shared.VideoV1RoomRoomParticipant;
}
