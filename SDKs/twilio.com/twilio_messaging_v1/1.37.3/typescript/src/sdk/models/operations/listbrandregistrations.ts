import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBrandRegistrationsServerList = [
	"https://messaging.twilio.com",
] as const;


export class ListBrandRegistrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBrandRegistrationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBrandRegistrationsListBrandRegistrationsResponseMeta extends SpeakeasyBase {
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


export class ListBrandRegistrationsListBrandRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.MessagingV1BrandRegistrations })
  data?: shared.MessagingV1BrandRegistrations[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBrandRegistrationsListBrandRegistrationsResponseMeta;
}


export class ListBrandRegistrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListBrandRegistrationsQueryParams;

  @SpeakeasyMetadata()
  security: ListBrandRegistrationsSecurity;
}


export class ListBrandRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBrandRegistrationsResponse?: ListBrandRegistrationsListBrandRegistrationsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
