import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchMarketplaceAvailableAddOnServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchMarketplaceAvailableAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMarketplaceAvailableAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMarketplaceAvailableAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchMarketplaceAvailableAddOnPathParams;

  @SpeakeasyMetadata()
  security: FetchMarketplaceAvailableAddOnSecurity;
}


export class FetchMarketplaceAvailableAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewMarketplaceAvailableAddOn?: shared.PreviewMarketplaceAvailableAddOn;
}
