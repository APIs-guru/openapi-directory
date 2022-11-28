import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListHostedNumbersAuthorizationDocumentServerList = [
	"https://preview.twilio.com",
] as const;


export class ListHostedNumbersAuthorizationDocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.AuthorizationDocumentEnumStatusEnum;
}


export class ListHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta extends SpeakeasyBase {
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


export class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersAuthorizationDocument })
  items?: shared.PreviewHostedNumbersAuthorizationDocument[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta;
}


export class ListHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListHostedNumbersAuthorizationDocumentQueryParams;

  @SpeakeasyMetadata()
  security: ListHostedNumbersAuthorizationDocumentSecurity;
}


export class ListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listHostedNumbersAuthorizationDocumentResponse?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
