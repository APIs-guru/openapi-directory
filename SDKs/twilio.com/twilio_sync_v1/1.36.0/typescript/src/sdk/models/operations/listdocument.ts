import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTDOCUMENT_SERVERS = [
	"https://sync.twilio.com",
];



export class ListDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListDocumentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListDocumentPathParams;

  @Metadata()
  queryParams: ListDocumentQueryParams;

  @Metadata()
  security: ListDocumentSecurity;
}


export class ListDocumentListDocumentResponseMeta extends SpeakeasyBase {
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


export class ListDocumentListDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents", elemType: shared.SyncV1ServiceDocument })
  documents?: shared.SyncV1ServiceDocument[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListDocumentListDocumentResponseMeta;
}


export class ListDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDocumentResponse?: ListDocumentListDocumentResponse;

  @Metadata()
  statusCode: number;
}
