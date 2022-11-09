import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIGNINGKEY_SERVERS = [
	"https://api.twilio.com",
];



export class ListSigningKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListSigningKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSigningKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSigningKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSigningKeyPathParams;

  @Metadata()
  queryParams: ListSigningKeyQueryParams;

  @Metadata()
  security: ListSigningKeySecurity;
}


export class ListSigningKeyListSigningKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=signing_keys", elemType: shared.ApiV2010AccountSigningKey })
  signingKeys?: shared.ApiV2010AccountSigningKey[];

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListSigningKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSigningKeyResponse?: ListSigningKeyListSigningKeyResponse;

  @Metadata()
  statusCode: number;
}
