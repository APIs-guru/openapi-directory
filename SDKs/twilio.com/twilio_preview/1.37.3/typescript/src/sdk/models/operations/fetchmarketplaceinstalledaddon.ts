import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchMarketplaceInstalledAddOnServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchMarketplaceInstalledAddOnPathParams;

  @SpeakeasyMetadata()
  security: FetchMarketplaceInstalledAddOnSecurity;
}


export class FetchMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewMarketplaceInstalledAddOn?: shared.PreviewMarketplaceInstalledAddOn;
}
