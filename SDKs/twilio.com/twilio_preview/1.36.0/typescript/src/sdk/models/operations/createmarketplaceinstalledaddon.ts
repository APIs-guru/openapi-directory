import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMARKETPLACEINSTALLEDADDON_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AcceptTermsOfService;" })
  acceptTermsOfService: boolean;

  @Metadata({ data: "form, name=AvailableAddOnSid;" })
  availableAddOnSid: string;

  @Metadata({ data: "form, name=Configuration;" })
  configuration?: any;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest;

  @Metadata()
  security: CreateMarketplaceInstalledAddOnSecurity;
}


export class CreateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
