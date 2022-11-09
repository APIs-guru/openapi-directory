import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHPLAYERSTREAMER_SERVERS = [
	"https://media.twilio.com",
];



export class FetchPlayerStreamerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchPlayerStreamerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchPlayerStreamerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchPlayerStreamerPathParams;

  @Metadata()
  security: FetchPlayerStreamerSecurity;
}


export class FetchPlayerStreamerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
