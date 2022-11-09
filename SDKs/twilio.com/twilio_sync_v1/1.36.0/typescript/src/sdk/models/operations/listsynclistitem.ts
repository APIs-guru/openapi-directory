import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCLISTITEM_SERVERS = [
	"https://sync.twilio.com",
];



export class ListSyncListItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncListItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Bounds" })
  bounds?: shared.SyncListItemEnumQueryFromBoundTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.SyncListItemEnumQueryResultOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncListItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncListItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncListItemPathParams;

  @Metadata()
  queryParams: ListSyncListItemQueryParams;

  @Metadata()
  security: ListSyncListItemSecurity;
}


export class ListSyncListItemListSyncListItemResponseMeta extends SpeakeasyBase {
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


export class ListSyncListItemListSyncListItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SyncV1ServiceSyncListSyncListItem })
  items?: shared.SyncV1ServiceSyncListSyncListItem[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncListItemListSyncListItemResponseMeta;
}


export class ListSyncListItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncListItemResponse?: ListSyncListItemListSyncListItemResponse;

  @Metadata()
  statusCode: number;
}
