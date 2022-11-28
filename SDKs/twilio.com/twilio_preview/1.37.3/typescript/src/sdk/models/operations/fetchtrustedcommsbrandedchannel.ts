import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrustedCommsBrandedChannelServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchTrustedCommsBrandedChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchTrustedCommsBrandedChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsBrandedChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTrustedCommsBrandedChannelPathParams;

  @SpeakeasyMetadata()
  security: FetchTrustedCommsBrandedChannelSecurity;
}


export class FetchTrustedCommsBrandedChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewTrustedCommsBrandedChannel?: shared.PreviewTrustedCommsBrandedChannel;
}
