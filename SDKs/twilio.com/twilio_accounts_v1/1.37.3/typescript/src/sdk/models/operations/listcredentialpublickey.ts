import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCredentialPublicKeyServerList = [
	"https://accounts.twilio.com",
] as const;


export class ListCredentialPublicKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialPublicKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialPublicKeyListCredentialPublicKeyResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListCredentialPublicKeyListCredentialPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: shared.AccountsV1CredentialCredentialPublicKey })
  credentials?: shared.AccountsV1CredentialCredentialPublicKey[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCredentialPublicKeyListCredentialPublicKeyResponseMeta;
}


export class ListCredentialPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListCredentialPublicKeyQueryParams;

  @SpeakeasyMetadata()
  security: ListCredentialPublicKeySecurity;
}


export class ListCredentialPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCredentialPublicKeyResponse?: ListCredentialPublicKeyListCredentialPublicKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
