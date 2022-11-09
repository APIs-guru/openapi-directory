import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEROOM_SERVERS = [
	"https://video.twilio.com",
];



export class UpdateRoomPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRoomUpdateRoomRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.RoomEnumRoomStatusEnum;
}


export class UpdateRoomSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRoomPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRoomUpdateRoomRequest;

  @Metadata()
  security: UpdateRoomSecurity;
}


export class UpdateRoomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1Room?: shared.VideoV1Room;
}
