import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncSyncListItemServerList = [
	"https://preview.twilio.com",
] as const;


export class ListSyncSyncListItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" })
  listSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncListItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Bounds" })
  bounds?: shared.SyncListItemEnumQueryFromBoundTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.SyncListItemEnumQueryResultOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncListItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncListItemListSyncSyncListItemResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncListItemListSyncSyncListItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PreviewSyncServiceSyncListSyncListItem })
  items?: shared.PreviewSyncServiceSyncListSyncListItem[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncSyncListItemListSyncSyncListItemResponseMeta;
}


export class ListSyncSyncListItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncSyncListItemPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncSyncListItemQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncSyncListItemSecurity;
}


export class ListSyncSyncListItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncSyncListItemResponse?: ListSyncSyncListItemListSyncSyncListItemResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
