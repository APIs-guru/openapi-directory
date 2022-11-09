import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
];



export class UpdateCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateCredentialUpdateCredentialRequest extends SpeakeasyBase {
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
}


export class UpdateCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCredentialRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateCredentialPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCredentialUpdateCredentialRequest;

  @Metadata()
  security: UpdateCredentialSecurity;
}


export class UpdateCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  chatV1Credential?: shared.ChatV1Credential;
}
