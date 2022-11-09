import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWIRELESSRATEPLAN_SERVERS = [
	"https://preview.twilio.com",
];



export class ListWirelessRatePlanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWirelessRatePlanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWirelessRatePlanRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListWirelessRatePlanQueryParams;

  @Metadata()
  security: ListWirelessRatePlanSecurity;
}


export class ListWirelessRatePlanListWirelessRatePlanResponseMeta extends SpeakeasyBase {
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


export class ListWirelessRatePlanListWirelessRatePlanResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListWirelessRatePlanListWirelessRatePlanResponseMeta;

  @Metadata({ data: "json, name=rate_plans", elemType: shared.PreviewWirelessRatePlan })
  ratePlans?: shared.PreviewWirelessRatePlan[];
}


export class ListWirelessRatePlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWirelessRatePlanResponse?: ListWirelessRatePlanListWirelessRatePlanResponse;

  @Metadata()
  statusCode: number;
}
