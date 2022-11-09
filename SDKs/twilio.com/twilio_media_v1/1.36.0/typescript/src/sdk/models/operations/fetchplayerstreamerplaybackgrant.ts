import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHPLAYERSTREAMERPLAYBACKGRANT_SERVERS = [
	"https://media.twilio.com",
];



export class FetchPlayerStreamerPlaybackGrantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchPlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchPlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchPlayerStreamerPlaybackGrantPathParams;

  @Metadata()
  security: FetchPlayerStreamerPlaybackGrantSecurity;
}


export class FetchPlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
