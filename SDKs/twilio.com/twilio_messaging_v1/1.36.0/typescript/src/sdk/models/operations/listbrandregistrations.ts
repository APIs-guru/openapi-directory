import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBRANDREGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
];



export class ListBrandRegistrationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBrandRegistrationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBrandRegistrationsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListBrandRegistrationsQueryParams;

  @Metadata()
  security: ListBrandRegistrationsSecurity;
}


export class ListBrandRegistrationsListBrandRegistrationsResponseMeta extends SpeakeasyBase {
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


export class ListBrandRegistrationsListBrandRegistrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.MessagingV1BrandRegistrations })
  data?: shared.MessagingV1BrandRegistrations[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListBrandRegistrationsListBrandRegistrationsResponseMeta;
}


export class ListBrandRegistrationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBrandRegistrationsResponse?: ListBrandRegistrationsListBrandRegistrationsResponse;

  @Metadata()
  statusCode: number;
}
