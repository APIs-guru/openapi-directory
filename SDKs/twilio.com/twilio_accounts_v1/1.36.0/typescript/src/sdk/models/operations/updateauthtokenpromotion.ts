import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEAUTHTOKENPROMOTION_SERVERS = [
	"https://accounts.twilio.com",
];



export class UpdateAuthTokenPromotionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAuthTokenPromotionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: UpdateAuthTokenPromotionSecurity;
}


export class UpdateAuthTokenPromotionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountsV1AuthTokenPromotion?: shared.AccountsV1AuthTokenPromotion;
}
