import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBrandVettingServerList = [
	"https://messaging.twilio.com",
] as const;


export class ListBrandVettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" })
  brandSid: string;
}


export class ListBrandVettingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VettingProvider" })
  vettingProvider?: shared.BrandVettingEnumVettingProviderEnum;
}


export class ListBrandVettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBrandVettingListBrandVettingResponseMeta extends SpeakeasyBase {
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


export class ListBrandVettingListBrandVettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.MessagingV1BrandRegistrationsBrandVetting })
  data?: shared.MessagingV1BrandRegistrationsBrandVetting[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBrandVettingListBrandVettingResponseMeta;
}


export class ListBrandVettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListBrandVettingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBrandVettingQueryParams;

  @SpeakeasyMetadata()
  security: ListBrandVettingSecurity;
}


export class ListBrandVettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBrandVettingResponse?: ListBrandVettingListBrandVettingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
