import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBILLINGPERIOD_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListBillingPeriodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class ListBillingPeriodQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBillingPeriodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBillingPeriodRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListBillingPeriodPathParams;

  @Metadata()
  queryParams: ListBillingPeriodQueryParams;

  @Metadata()
  security: ListBillingPeriodSecurity;
}


export class ListBillingPeriodListBillingPeriodResponseMeta extends SpeakeasyBase {
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


export class ListBillingPeriodListBillingPeriodResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_periods", elemType: shared.SupersimV1SimBillingPeriod })
  billingPeriods?: shared.SupersimV1SimBillingPeriod[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListBillingPeriodListBillingPeriodResponseMeta;
}


export class ListBillingPeriodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBillingPeriodResponse?: ListBillingPeriodListBillingPeriodResponse;

  @Metadata()
  statusCode: number;
}
