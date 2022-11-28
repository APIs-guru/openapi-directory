import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchCredentialPublicKeyServerList = [
	"https://accounts.twilio.com",
] as const;


export class FetchCredentialPublicKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchCredentialPublicKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchCredentialPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchCredentialPublicKeyPathParams;

  @SpeakeasyMetadata()
  security: FetchCredentialPublicKeySecurity;
}


export class FetchCredentialPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountsV1CredentialCredentialPublicKey?: shared.AccountsV1CredentialCredentialPublicKey;
}
