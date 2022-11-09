import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSUPPORTINGDOCUMENTTYPE_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListSupportingDocumentTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSupportingDocumentTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSupportingDocumentTypeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListSupportingDocumentTypeQueryParams;

  @Metadata()
  security: ListSupportingDocumentTypeSecurity;
}


export class ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta extends SpeakeasyBase {
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


export class ListSupportingDocumentTypeListSupportingDocumentTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta;

  @Metadata({ data: "json, name=supporting_document_types", elemType: shared.TrusthubV1SupportingDocumentType })
  supportingDocumentTypes?: shared.TrusthubV1SupportingDocumentType[];
}


export class ListSupportingDocumentTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSupportingDocumentTypeResponse?: ListSupportingDocumentTypeListSupportingDocumentTypeResponse;

  @Metadata()
  statusCode: number;
}
