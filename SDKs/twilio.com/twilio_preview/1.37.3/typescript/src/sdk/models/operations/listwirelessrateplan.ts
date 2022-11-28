import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListWirelessRatePlanServerList = [
	"https://preview.twilio.com",
] as const;


export class ListWirelessRatePlanQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWirelessRatePlanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWirelessRatePlanListWirelessRatePlanResponseMeta extends SpeakeasyBase {
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


export class ListWirelessRatePlanListWirelessRatePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListWirelessRatePlanListWirelessRatePlanResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=rate_plans", elemType: shared.PreviewWirelessRatePlan })
  ratePlans?: shared.PreviewWirelessRatePlan[];
}


export class ListWirelessRatePlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListWirelessRatePlanQueryParams;

  @SpeakeasyMetadata()
  security: ListWirelessRatePlanSecurity;
}


export class ListWirelessRatePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWirelessRatePlanResponse?: ListWirelessRatePlanListWirelessRatePlanResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
