import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListDocumentServerList = [
	"https://sync.twilio.com",
] as const;


export class ListDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListDocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListDocumentListDocumentResponseMeta extends SpeakeasyBase {
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


export class ListDocumentListDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: shared.SyncV1ServiceDocument })
  documents?: shared.SyncV1ServiceDocument[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListDocumentListDocumentResponseMeta;
}


export class ListDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListDocumentPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDocumentQueryParams;

  @SpeakeasyMetadata()
  security: ListDocumentSecurity;
}


export class ListDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listDocumentResponse?: ListDocumentListDocumentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
