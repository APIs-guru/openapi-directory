import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncSyncMapServerList = [
	"https://preview.twilio.com",
] as const;


export class ListSyncSyncMapPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncMapQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncMapSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncMapListSyncSyncMapResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncMapListSyncSyncMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maps", elemType: shared.PreviewSyncServiceSyncMap })
  maps?: shared.PreviewSyncServiceSyncMap[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncSyncMapListSyncSyncMapResponseMeta;
}


export class ListSyncSyncMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncSyncMapPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncSyncMapQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncSyncMapSecurity;
}


export class ListSyncSyncMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncSyncMapResponse?: ListSyncSyncMapListSyncSyncMapResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
