import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateMarketplaceInstalledAddOnServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Configuration;" })
  configuration?: any;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateMarketplaceInstalledAddOnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest;

  @SpeakeasyMetadata()
  security: UpdateMarketplaceInstalledAddOnSecurity;
}


export class UpdateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
