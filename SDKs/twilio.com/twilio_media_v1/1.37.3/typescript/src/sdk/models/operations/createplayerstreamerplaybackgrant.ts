import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreatePlayerStreamerPlaybackGrantServerList = [
	"https://media.twilio.com",
] as const;


export class CreatePlayerStreamerPlaybackGrantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AccessControlAllowOrigin;" })
  accessControlAllowOrigin?: string;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreatePlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreatePlayerStreamerPlaybackGrantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest;

  @SpeakeasyMetadata()
  security: CreatePlayerStreamerPlaybackGrantSecurity;
}


export class CreatePlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
