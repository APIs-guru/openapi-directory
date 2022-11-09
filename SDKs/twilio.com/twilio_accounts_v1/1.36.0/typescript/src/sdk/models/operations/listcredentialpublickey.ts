import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCREDENTIALPUBLICKEY_SERVERS = [
	"https://accounts.twilio.com",
];



export class ListCredentialPublicKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialPublicKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCredentialPublicKeyQueryParams;

  @Metadata()
  security: ListCredentialPublicKeySecurity;
}


export class ListCredentialPublicKeyListCredentialPublicKeyResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListCredentialPublicKeyListCredentialPublicKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials", elemType: shared.AccountsV1CredentialCredentialPublicKey })
  credentials?: shared.AccountsV1CredentialCredentialPublicKey[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCredentialPublicKeyListCredentialPublicKeyResponseMeta;
}


export class ListCredentialPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCredentialPublicKeyResponse?: ListCredentialPublicKeyListCredentialPublicKeyResponse;

  @Metadata()
  statusCode: number;
}
