import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCSYNCMAPITEM_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncSyncMapItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncMapItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Bounds" })
  bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.SyncMapItemEnumQueryResultOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncMapItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncMapItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncSyncMapItemPathParams;

  @Metadata()
  queryParams: ListSyncSyncMapItemQueryParams;

  @Metadata()
  security: ListSyncSyncMapItemSecurity;
}


export class ListSyncSyncMapItemListSyncSyncMapItemResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncMapItemListSyncSyncMapItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PreviewSyncServiceSyncMapSyncMapItem })
  items?: shared.PreviewSyncServiceSyncMapSyncMapItem[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncSyncMapItemListSyncSyncMapItemResponseMeta;
}


export class ListSyncSyncMapItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncSyncMapItemResponse?: ListSyncSyncMapItemListSyncSyncMapItemResponse;

  @Metadata()
  statusCode: number;
}
