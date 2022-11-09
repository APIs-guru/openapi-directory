import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCSYNCLIST_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncSyncListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncSyncListPathParams;

  @Metadata()
  queryParams: ListSyncSyncListQueryParams;

  @Metadata()
  security: ListSyncSyncListSecurity;
}


export class ListSyncSyncListListSyncSyncListResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncListListSyncSyncListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lists", elemType: shared.PreviewSyncServiceSyncList })
  lists?: shared.PreviewSyncServiceSyncList[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncSyncListListSyncSyncListResponseMeta;
}


export class ListSyncSyncListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncSyncListResponse?: ListSyncSyncListListSyncSyncListResponse;

  @Metadata()
  statusCode: number;
}
