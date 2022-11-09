import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECREDENTIAL_SERVERS = [
	"https://notify.twilio.com",
];



export class CreateCredentialCreateCredentialRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ApiKey;" })
  apiKey?: string;

  @Metadata({ data: "form, name=Certificate;" })
  certificate?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=PrivateKey;" })
  privateKey?: string;

  @Metadata({ data: "form, name=Sandbox;" })
  sandbox?: boolean;

  @Metadata({ data: "form, name=Secret;" })
  secret?: string;

  @Metadata({ data: "form, name=Type;" })
  type: shared.CredentialEnumPushServiceEnum;
}


export class CreateCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCredentialRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCredentialCreateCredentialRequest;

  @Metadata()
  security: CreateCredentialSecurity;
}


export class CreateCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notifyV1Credential?: shared.NotifyV1Credential;
}
