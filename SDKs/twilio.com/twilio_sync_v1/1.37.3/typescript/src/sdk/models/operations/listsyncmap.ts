import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncMapServerList = [
	"https://sync.twilio.com",
] as const;


export class ListSyncMapPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncMapQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncMapSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncMapListSyncMapResponseMeta extends SpeakeasyBase {
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


export class ListSyncMapListSyncMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maps", elemType: shared.SyncV1ServiceSyncMap })
  maps?: shared.SyncV1ServiceSyncMap[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncMapListSyncMapResponseMeta;
}


export class ListSyncMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncMapPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncMapQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncMapSecurity;
}


export class ListSyncMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncMapResponse?: ListSyncMapListSyncMapResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
