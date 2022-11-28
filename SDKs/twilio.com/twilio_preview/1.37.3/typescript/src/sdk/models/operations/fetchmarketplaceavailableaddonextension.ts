import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchMarketplaceAvailableAddOnExtensionServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchMarketplaceAvailableAddOnExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AvailableAddOnSid" })
  availableAddOnSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMarketplaceAvailableAddOnExtensionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMarketplaceAvailableAddOnExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchMarketplaceAvailableAddOnExtensionPathParams;

  @SpeakeasyMetadata()
  security: FetchMarketplaceAvailableAddOnExtensionSecurity;
}


export class FetchMarketplaceAvailableAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewMarketplaceAvailableAddOnAvailableAddOnExtension?: shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension;
}
