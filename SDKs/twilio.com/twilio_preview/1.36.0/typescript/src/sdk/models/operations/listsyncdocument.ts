import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCDOCUMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class ListSyncDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncDocumentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncDocumentPathParams;

  @Metadata()
  queryParams: ListSyncDocumentQueryParams;

  @Metadata()
  security: ListSyncDocumentSecurity;
}


export class ListSyncDocumentListSyncDocumentResponseMeta extends SpeakeasyBase {
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


export class ListSyncDocumentListSyncDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents", elemType: shared.PreviewSyncServiceDocument })
  documents?: shared.PreviewSyncServiceDocument[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncDocumentListSyncDocumentResponseMeta;
}


export class ListSyncDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncDocumentResponse?: ListSyncDocumentListSyncDocumentResponse;

  @Metadata()
  statusCode: number;
}
