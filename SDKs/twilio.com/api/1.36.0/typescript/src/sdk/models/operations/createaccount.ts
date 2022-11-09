import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEACCOUNT_SERVERS = [
	"https://api.twilio.com",
];



export class CreateAccountCreateAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateAccountRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateAccountCreateAccountRequest;

  @Metadata()
  security: CreateAccountSecurity;
}


export class CreateAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010Account?: shared.ApiV2010Account;
}
