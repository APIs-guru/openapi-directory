import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEPLAYERSTREAMER_SERVERS = [
	"https://media.twilio.com",
];



export class UpdatePlayerStreamerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdatePlayerStreamerUpdatePlayerStreamerRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.PlayerStreamerEnumUpdateStatusEnum;
}


export class UpdatePlayerStreamerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdatePlayerStreamerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdatePlayerStreamerPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePlayerStreamerUpdatePlayerStreamerRequest;

  @Metadata()
  security: UpdatePlayerStreamerSecurity;
}


export class UpdatePlayerStreamerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
