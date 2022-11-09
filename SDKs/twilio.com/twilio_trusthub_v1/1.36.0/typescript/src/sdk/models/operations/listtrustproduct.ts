import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTRUSTPRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class ListTrustProductQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicySid" })
  policySid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.TrustProductEnumStatusEnum;
}


export class ListTrustProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTrustProductRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListTrustProductQueryParams;

  @Metadata()
  security: ListTrustProductSecurity;
}


export class ListTrustProductListTrustProductResponseMeta extends SpeakeasyBase {
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


export class ListTrustProductListTrustProductResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTrustProductListTrustProductResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProduct })
  results?: shared.TrusthubV1TrustProduct[];
}


export class ListTrustProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrustProductResponse?: ListTrustProductListTrustProductResponse;

  @Metadata()
  statusCode: number;
}
