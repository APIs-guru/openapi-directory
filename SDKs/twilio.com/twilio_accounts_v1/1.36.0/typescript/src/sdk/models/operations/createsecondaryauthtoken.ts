import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESECONDARYAUTHTOKEN_SERVERS = [
	"https://accounts.twilio.com",
];



export class CreateSecondaryAuthTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSecondaryAuthTokenRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: CreateSecondaryAuthTokenSecurity;
}


export class CreateSecondaryAuthTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountsV1SecondaryAuthToken?: shared.AccountsV1SecondaryAuthToken;
}
