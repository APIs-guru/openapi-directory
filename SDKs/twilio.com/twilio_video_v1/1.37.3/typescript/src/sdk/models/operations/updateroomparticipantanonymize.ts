import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateRoomParticipantAnonymizeServerList = [
	"https://video.twilio.com",
] as const;


export class UpdateRoomParticipantAnonymizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRoomParticipantAnonymizeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomParticipantAnonymizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateRoomParticipantAnonymizePathParams;

  @SpeakeasyMetadata()
  security: UpdateRoomParticipantAnonymizeSecurity;
}


export class UpdateRoomParticipantAnonymizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1RoomRoomParticipantRoomParticipantAnonymize?: shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize;
}
