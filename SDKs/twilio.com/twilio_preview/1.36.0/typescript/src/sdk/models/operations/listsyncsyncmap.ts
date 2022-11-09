import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCSYNCMAP_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncSyncMapPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncSyncMapQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncSyncMapSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncSyncMapRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncSyncMapPathParams;

  @Metadata()
  queryParams: ListSyncSyncMapQueryParams;

  @Metadata()
  security: ListSyncSyncMapSecurity;
}


export class ListSyncSyncMapListSyncSyncMapResponseMeta extends SpeakeasyBase {
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


export class ListSyncSyncMapListSyncSyncMapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=maps", elemType: shared.PreviewSyncServiceSyncMap })
  maps?: shared.PreviewSyncServiceSyncMap[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncSyncMapListSyncSyncMapResponseMeta;
}


export class ListSyncSyncMapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncSyncMapResponse?: ListSyncSyncMapListSyncSyncMapResponse;

  @Metadata()
  statusCode: number;
}
