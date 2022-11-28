import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSupportingDocumentTypeServerList = [
	"https://trusthub.twilio.com",
] as const;


export class ListSupportingDocumentTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSupportingDocumentTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta extends SpeakeasyBase {
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


export class ListSupportingDocumentTypeListSupportingDocumentTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=supporting_document_types", elemType: shared.TrusthubV1SupportingDocumentType })
  supportingDocumentTypes?: shared.TrusthubV1SupportingDocumentType[];
}


export class ListSupportingDocumentTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListSupportingDocumentTypeQueryParams;

  @SpeakeasyMetadata()
  security: ListSupportingDocumentTypeSecurity;
}


export class ListSupportingDocumentTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSupportingDocumentTypeResponse?: ListSupportingDocumentTypeListSupportingDocumentTypeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
