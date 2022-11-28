import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBillingPeriodServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListBillingPeriodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class ListBillingPeriodQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBillingPeriodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBillingPeriodListBillingPeriodResponseMeta extends SpeakeasyBase {
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


export class ListBillingPeriodListBillingPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_periods", elemType: shared.SupersimV1SimBillingPeriod })
  billingPeriods?: shared.SupersimV1SimBillingPeriod[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBillingPeriodListBillingPeriodResponseMeta;
}


export class ListBillingPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListBillingPeriodPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBillingPeriodQueryParams;

  @SpeakeasyMetadata()
  security: ListBillingPeriodSecurity;
}


export class ListBillingPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBillingPeriodResponse?: ListBillingPeriodListBillingPeriodResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
