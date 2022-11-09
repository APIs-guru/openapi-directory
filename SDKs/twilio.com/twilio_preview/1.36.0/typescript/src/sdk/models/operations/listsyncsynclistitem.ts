import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCSYNCLISTITEM_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncSyncListItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncListItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Bounds" })
  bounds?: shared.SyncListItemEnumQueryFromBoundTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.SyncListItemEnumQueryResultOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncListItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncListItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncSyncListItemPathParams;

  @Metadata()
  queryParams: ListSyncSyncListItemQueryParams;

  @Metadata()
  security: ListSyncSyncListItemSecurity;
}


export class ListSyncSyncListItemListSyncSyncListItemResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncListItemListSyncSyncListItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PreviewSyncServiceSyncListSyncListItem })
  items?: shared.PreviewSyncServiceSyncListSyncListItem[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncSyncListItemListSyncSyncListItemResponseMeta;
}


export class ListSyncSyncListItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncSyncListItemResponse?: ListSyncSyncListItemListSyncSyncListItemResponse;

  @Metadata()
  statusCode: number;
}
