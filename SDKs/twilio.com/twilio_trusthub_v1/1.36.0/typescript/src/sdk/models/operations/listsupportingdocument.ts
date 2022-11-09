import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSUPPORTINGDOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListSupportingDocumentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSupportingDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSupportingDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListSupportingDocumentQueryParams;

  @Metadata()
  security: ListSupportingDocumentSecurity;
}


export class ListSupportingDocumentListSupportingDocumentResponseMeta extends SpeakeasyBase {
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


export class ListSupportingDocumentListSupportingDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSupportingDocumentListSupportingDocumentResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1SupportingDocument })
  results?: shared.TrusthubV1SupportingDocument[];
}


export class ListSupportingDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSupportingDocumentResponse?: ListSupportingDocumentListSupportingDocumentResponse;

  @Metadata()
  statusCode: number;
}
