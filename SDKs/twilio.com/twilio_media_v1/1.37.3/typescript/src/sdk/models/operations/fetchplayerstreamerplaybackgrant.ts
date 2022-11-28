import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchPlayerStreamerPlaybackGrantServerList = [
	"https://media.twilio.com",
] as const;


export class FetchPlayerStreamerPlaybackGrantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchPlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchPlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchPlayerStreamerPlaybackGrantPathParams;

  @SpeakeasyMetadata()
  security: FetchPlayerStreamerPlaybackGrantSecurity;
}


export class FetchPlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
