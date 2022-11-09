import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchMarketplaceInstalledAddOnExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InstalledAddOnSid" })
  installedAddOnSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchMarketplaceInstalledAddOnExtensionPathParams;

  @Metadata()
  security: FetchMarketplaceInstalledAddOnExtensionSecurity;
}


export class FetchMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewMarketplaceInstalledAddOnInstalledAddOnExtension?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension;
}
