import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEMARKETPLACEINSTALLEDADDON_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Configuration;" })
  configuration?: any;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateMarketplaceInstalledAddOnPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest;

  @Metadata()
  security: UpdateMarketplaceInstalledAddOnSecurity;
}


export class UpdateMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
