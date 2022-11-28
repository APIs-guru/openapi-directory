import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteMarketplaceInstalledAddOnServerList = [
	"https://preview.twilio.com",
] as const;


export class DeleteMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteMarketplaceInstalledAddOnPathParams;

  @SpeakeasyMetadata()
  security: DeleteMarketplaceInstalledAddOnSecurity;
}


export class DeleteMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
