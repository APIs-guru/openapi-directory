import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncSyncMapItemServerList = [
	"https://preview.twilio.com",
] as const;


export class ListSyncSyncMapItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" })
  mapSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncMapItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Bounds" })
  bounds?: shared.SyncMapItemEnumQueryFromBoundTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.SyncMapItemEnumQueryResultOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncMapItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncMapItemListSyncSyncMapItemResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncMapItemListSyncSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PreviewSyncServiceSyncMapSyncMapItem })
  items?: shared.PreviewSyncServiceSyncMapSyncMapItem[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncSyncMapItemListSyncSyncMapItemResponseMeta;
}


export class ListSyncSyncMapItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncSyncMapItemPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncSyncMapItemQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncSyncMapItemSecurity;
}


export class ListSyncSyncMapItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncSyncMapItemResponse?: ListSyncSyncMapItemListSyncSyncMapItemResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
