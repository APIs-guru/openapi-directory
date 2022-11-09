import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIPCREDENTIAL_SERVERS = [
	"https://api.twilio.com",
];



export class ListSipCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CredentialListSid" })
  credentialListSid: string;
}


export class ListSipCredentialQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipCredentialRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSipCredentialPathParams;

  @Metadata()
  queryParams: ListSipCredentialQueryParams;

  @Metadata()
  security: ListSipCredentialSecurity;
}


export class ListSipCredentialListSipCredentialResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials", elemType: shared.ApiV2010AccountSipSipCredentialListSipCredential })
  credentials?: shared.ApiV2010AccountSipSipCredentialListSipCredential[];

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

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListSipCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSipCredentialResponse?: ListSipCredentialListSipCredentialResponse;

  @Metadata()
  statusCode: number;
}
