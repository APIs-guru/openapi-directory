import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateMarketplaceInstalledAddOnExtensionServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateMarketplaceInstalledAddOnExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InstalledAddOnSid" })
  installedAddOnSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled: boolean;
}


export class UpdateMarketplaceInstalledAddOnExtensionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMarketplaceInstalledAddOnExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateMarketplaceInstalledAddOnExtensionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest;

  @SpeakeasyMetadata()
  security: UpdateMarketplaceInstalledAddOnExtensionSecurity;
}


export class UpdateMarketplaceInstalledAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewMarketplaceInstalledAddOnInstalledAddOnExtension?: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension;
}
