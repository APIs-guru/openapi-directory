import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHMARKETPLACEAVAILABLEADDONEXTENSION_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchMarketplaceAvailableAddOnExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AvailableAddOnSid" })
  availableAddOnSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchMarketplaceAvailableAddOnExtensionPathParams;

  @Metadata()
  security: FetchMarketplaceAvailableAddOnExtensionSecurity;
}


export class FetchMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewMarketplaceAvailableAddOnAvailableAddOnExtension?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension;
}
