import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEMARKETPLACEINSTALLEDADDON_SERVERS = [
	"https://preview.twilio.com",
];



export class DeleteMarketplaceInstalledAddOnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteMarketplaceInstalledAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteMarketplaceInstalledAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteMarketplaceInstalledAddOnPathParams;

  @Metadata()
  security: DeleteMarketplaceInstalledAddOnSecurity;
}


export class DeleteMarketplaceInstalledAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
