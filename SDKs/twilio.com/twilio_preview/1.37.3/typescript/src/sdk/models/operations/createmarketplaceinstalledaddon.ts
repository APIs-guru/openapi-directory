import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateMarketplaceInstalledAddOnServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AcceptTermsOfService;" })
  acceptTermsOfService: boolean;

  @SpeakeasyMetadata({ data: "form, name=AvailableAddOnSid;" })
  availableAddOnSid: string;

  @SpeakeasyMetadata({ data: "form, name=Configuration;" })
  configuration?: any;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest;

  @SpeakeasyMetadata()
  security: CreateMarketplaceInstalledAddOnSecurity;
}


export class CreateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
