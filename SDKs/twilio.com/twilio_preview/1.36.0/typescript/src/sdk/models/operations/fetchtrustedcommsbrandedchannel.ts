import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUSTEDCOMMSBRANDEDCHANNEL_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchTrustedCommsBrandedChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchTrustedCommsBrandedChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsBrandedChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTrustedCommsBrandedChannelPathParams;

  @Metadata()
  security: FetchTrustedCommsBrandedChannelSecurity;
}


export class FetchTrustedCommsBrandedChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewTrustedCommsBrandedChannel?: shared.PreviewTrustedCommsBrandedChannel;
}
