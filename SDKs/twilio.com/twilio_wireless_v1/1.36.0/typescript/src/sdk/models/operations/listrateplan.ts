import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTRATEPLAN_SERVERS = [
	"https://wireless.twilio.com",
];



export class ListRatePlanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRatePlanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRatePlanRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListRatePlanQueryParams;

  @Metadata()
  security: ListRatePlanSecurity;
}


export class ListRatePlanListRatePlanResponseMeta extends SpeakeasyBase {
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


export class ListRatePlanListRatePlanResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRatePlanListRatePlanResponseMeta;

  @Metadata({ data: "json, name=rate_plans", elemType: shared.WirelessV1RatePlan })
  ratePlans?: shared.WirelessV1RatePlan[];
}


export class ListRatePlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRatePlanResponse?: ListRatePlanListRatePlanResponse;

  @Metadata()
  statusCode: number;
}
