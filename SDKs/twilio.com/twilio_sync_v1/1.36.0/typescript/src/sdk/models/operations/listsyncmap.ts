import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCMAP_SERVERS = [
	"https://sync.twilio.com",
];



export class ListSyncMapPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncMapQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncMapSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncMapRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncMapPathParams;

  @Metadata()
  queryParams: ListSyncMapQueryParams;

  @Metadata()
  security: ListSyncMapSecurity;
}


export class ListSyncMapListSyncMapResponseMeta extends SpeakeasyBase {
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


export class ListSyncMapListSyncMapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=maps", elemType: shared.SyncV1ServiceSyncMap })
  maps?: shared.SyncV1ServiceSyncMap[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncMapListSyncMapResponseMeta;
}


export class ListSyncMapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncMapResponse?: ListSyncMapListSyncMapResponse;

  @Metadata()
  statusCode: number;
}
