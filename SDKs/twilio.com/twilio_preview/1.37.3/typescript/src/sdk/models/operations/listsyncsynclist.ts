import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncSyncListServerList = [
	"https://preview.twilio.com",
] as const;


export class ListSyncSyncListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncListListSyncSyncListResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncListListSyncSyncListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lists", elemType: shared.PreviewSyncServiceSyncList })
  lists?: shared.PreviewSyncServiceSyncList[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncSyncListListSyncSyncListResponseMeta;
}


export class ListSyncSyncListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncSyncListPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncSyncListQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncSyncListSecurity;
}


export class ListSyncSyncListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncSyncListResponse?: ListSyncSyncListListSyncSyncListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
