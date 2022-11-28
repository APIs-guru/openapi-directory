import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCredentialServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class CreateCredentialCreateCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ApiKey;" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "form, name=Certificate;" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=PrivateKey;" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "form, name=Sandbox;" })
  sandbox?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Secret;" })
  secret?: string;

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: shared.CredentialEnumPushServiceEnum;
}


export class CreateCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCredentialCreateCredentialRequest;

  @SpeakeasyMetadata()
  security: CreateCredentialSecurity;
}


export class CreateCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipMessagingV1Credential?: shared.IpMessagingV1Credential;
}
