import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchMarketplaceInstalledAddOnExtensionServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchMarketplaceInstalledAddOnExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InstalledAddOnSid" })
  installedAddOnSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchMarketplaceInstalledAddOnExtensionPathParams;

  @SpeakeasyMetadata()
  security: FetchMarketplaceInstalledAddOnExtensionSecurity;
}


export class FetchMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewMarketplaceInstalledAddOnInstalledAddOnExtension?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension;
}
