import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHMARKETPLACEAVAILABLEADDON_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchMarketplaceAvailableAddOnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMarketplaceAvailableAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMarketplaceAvailableAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchMarketplaceAvailableAddOnPathParams;

  @Metadata()
  security: FetchMarketplaceAvailableAddOnSecurity;
}


export class FetchMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewMarketplaceAvailableAddOn?: shared.PreviewMarketplaceAvailableAddOn;
}
