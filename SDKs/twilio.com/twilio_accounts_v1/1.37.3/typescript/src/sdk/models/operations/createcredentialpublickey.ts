import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCredentialPublicKeyServerList = [
	"https://accounts.twilio.com",
] as const;


export class CreateCredentialPublicKeyCreateCredentialPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=PublicKey;" })
  publicKey: string;
}


export class CreateCredentialPublicKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCredentialPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCredentialPublicKeyCreateCredentialPublicKeyRequest;

  @SpeakeasyMetadata()
  security: CreateCredentialPublicKeySecurity;
}


export class CreateCredentialPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
