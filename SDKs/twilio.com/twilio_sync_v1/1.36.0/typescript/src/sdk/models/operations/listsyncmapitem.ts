import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCMAPITEM_SERVERS = [
	"https://sync.twilio.com",
];



export class ListSyncMapItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncMapItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Bounds" })
  bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.SyncMapItemEnumQueryResultOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncMapItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncMapItemRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncMapItemPathParams;

  @Metadata()
  queryParams: ListSyncMapItemQueryParams;

  @Metadata()
  security: ListSyncMapItemSecurity;
}


export class ListSyncMapItemListSyncMapItemResponseMeta extends SpeakeasyBase {
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


export class ListSyncMapItemListSyncMapItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SyncV1ServiceSyncMapSyncMapItem })
  items?: shared.SyncV1ServiceSyncMapSyncMapItem[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncMapItemListSyncMapItemResponseMeta;
}


export class ListSyncMapItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncMapItemResponse?: ListSyncMapItemListSyncMapItemResponse;

  @Metadata()
  statusCode: number;
}
