import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIPCREDENTIALLIST_SERVERS = [
	"https://api.twilio.com",
];



export class ListSipCredentialListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListSipCredentialListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipCredentialListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipCredentialListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSipCredentialListPathParams;

  @Metadata()
  queryParams: ListSipCredentialListQueryParams;

  @Metadata()
  security: ListSipCredentialListSecurity;
}


export class ListSipCredentialListListSipCredentialListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential_lists", elemType: shared.ApiV2010AccountSipSipCredentialList })
  credentialLists?: shared.ApiV2010AccountSipSipCredentialList[];

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


export class ListSipCredentialListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSipCredentialListResponse?: ListSipCredentialListListSipCredentialListResponse;

  @Metadata()
  statusCode: number;
}
