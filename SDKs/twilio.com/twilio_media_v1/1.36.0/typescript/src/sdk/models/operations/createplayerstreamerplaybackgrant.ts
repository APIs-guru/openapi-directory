import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEPLAYERSTREAMERPLAYBACKGRANT_SERVERS = [
	"https://media.twilio.com",
];



export class CreatePlayerStreamerPlaybackGrantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AccessControlAllowOrigin;" })
  accessControlAllowOrigin?: string;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreatePlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreatePlayerStreamerPlaybackGrantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest;

  @Metadata()
  security: CreatePlayerStreamerPlaybackGrantSecurity;
}


export class CreatePlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
