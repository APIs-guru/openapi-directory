import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncMapItemServerList = [
	"https://sync.twilio.com",
] as const;


export class ListSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncMapItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Bounds" })
  bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.SyncMapItemEnumQueryResultOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncMapItemListSyncMapItemResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListSyncMapItemListSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SyncV1ServiceSyncMapSyncMapItem })
  items?: shared.SyncV1ServiceSyncMapSyncMapItem[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncMapItemListSyncMapItemResponseMeta;
}


export class ListSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncMapItemPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncMapItemQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncMapItemSecurity;
}


export class ListSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncMapItemResponse?: ListSyncMapItemListSyncMapItemResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
