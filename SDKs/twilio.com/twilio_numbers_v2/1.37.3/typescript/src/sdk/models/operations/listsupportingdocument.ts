import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSupportingDocumentServerList = [
	"https://numbers.twilio.com",
] as const;


export class ListSupportingDocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSupportingDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSupportingDocumentListSupportingDocumentResponseMeta extends SpeakeasyBase {
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


export class ListSupportingDocumentListSupportingDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSupportingDocumentListSupportingDocumentResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceSupportingDocument })
  results?: shared.NumbersV2RegulatoryComplianceSupportingDocument[];
}


export class ListSupportingDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListSupportingDocumentQueryParams;

  @SpeakeasyMetadata()
  security: ListSupportingDocumentSecurity;
}


export class ListSupportingDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSupportingDocumentResponse?: ListSupportingDocumentListSupportingDocumentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
