import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class ListHostedNumbersAuthorizationDocumentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.AuthorizationDocumentEnumStatusEnum;
}


export class ListHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListHostedNumbersAuthorizationDocumentQueryParams;

  @Metadata()
  security: ListHostedNumbersAuthorizationDocumentSecurity;
}


export class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta extends SpeakeasyBase {
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


export class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PreviewHostedNumbersAuthorizationDocument })
  items?: shared.PreviewHostedNumbersAuthorizationDocument[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta;
}


export class ListHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHostedNumbersAuthorizationDocumentResponse?: ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse;

  @Metadata()
  statusCode: number;
}
