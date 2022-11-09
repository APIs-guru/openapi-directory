import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECREDENTIALAWS_SERVERS = [
	"https://accounts.twilio.com",
];



export class CreateCredentialAwsCreateCredentialAwsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @Metadata({ data: "form, name=Credentials;" })
  credentials: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateCredentialAwsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCredentialAwsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCredentialAwsCreateCredentialAwsRequest;

  @Metadata()
  security: CreateCredentialAwsSecurity;
}


export class CreateCredentialAwsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
