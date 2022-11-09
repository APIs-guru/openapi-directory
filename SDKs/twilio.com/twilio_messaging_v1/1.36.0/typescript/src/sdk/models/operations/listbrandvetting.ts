import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBRANDVETTING_SERVERS = [
	"https://messaging.twilio.com",
];



export class ListBrandVettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" })
  brandSid: string;
}


export class ListBrandVettingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VettingProvider" })
  vettingProvider?: shared.BrandVettingEnumVettingProviderEnum;
}


export class ListBrandVettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBrandVettingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListBrandVettingPathParams;

  @Metadata()
  queryParams: ListBrandVettingQueryParams;

  @Metadata()
  security: ListBrandVettingSecurity;
}


export class ListBrandVettingListBrandVettingResponseMeta extends SpeakeasyBase {
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


export class ListBrandVettingListBrandVettingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.MessagingV1BrandRegistrationsBrandVetting })
  data?: shared.MessagingV1BrandRegistrationsBrandVetting[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListBrandVettingListBrandVettingResponseMeta;
}


export class ListBrandVettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBrandVettingResponse?: ListBrandVettingListBrandVettingResponse;

  @Metadata()
  statusCode: number;
}
