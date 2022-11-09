import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCREDENTIALLIST_SERVERS = [
	"https://trunking.twilio.com",
];



export class ListCredentialListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class ListCredentialListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListCredentialListPathParams;

  @Metadata()
  queryParams: ListCredentialListQueryParams;

  @Metadata()
  security: ListCredentialListSecurity;
}


export class ListCredentialListListCredentialListResponseMeta extends SpeakeasyBase {
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


export class ListCredentialListListCredentialListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential_lists", elemType: shared.TrunkingV1TrunkCredentialList })
  credentialLists?: shared.TrunkingV1TrunkCredentialList[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCredentialListListCredentialListResponseMeta;
}


export class ListCredentialListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCredentialListResponse?: ListCredentialListListCredentialListResponse;

  @Metadata()
  statusCode: number;
}
