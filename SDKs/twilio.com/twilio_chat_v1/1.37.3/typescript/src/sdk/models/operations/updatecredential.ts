import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateCredentialServerList = [
	"https://chat.twilio.com",
] as const;


export class UpdateCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateCredentialUpdateCredentialRequest extends SpeakeasyBase {
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
}


export class UpdateCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateCredentialPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCredentialUpdateCredentialRequest;

  @SpeakeasyMetadata()
  security: UpdateCredentialSecurity;
}


export class UpdateCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chatV1Credential?: shared.ChatV1Credential;
}
