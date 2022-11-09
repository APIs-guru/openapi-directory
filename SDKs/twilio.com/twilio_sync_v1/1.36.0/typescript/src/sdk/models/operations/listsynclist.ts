import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCLIST_SERVERS = [
	"https://sync.twilio.com",
];



export class ListSyncListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncListPathParams;

  @Metadata()
  queryParams: ListSyncListQueryParams;

  @Metadata()
  security: ListSyncListSecurity;
}


export class ListSyncListListSyncListResponseMeta extends SpeakeasyBase {
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


export class ListSyncListListSyncListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lists", elemType: shared.SyncV1ServiceSyncList })
  lists?: shared.SyncV1ServiceSyncList[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncListListSyncListResponseMeta;
}


export class ListSyncListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncListResponse?: ListSyncListListSyncListResponse;

  @Metadata()
  statusCode: number;
}
