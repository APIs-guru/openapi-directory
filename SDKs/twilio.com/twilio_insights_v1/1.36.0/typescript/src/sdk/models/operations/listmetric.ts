import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMETRIC_SERVERS = [
	"https://insights.twilio.com",
];



export class ListMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class ListMetricQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: shared.MetricEnumStreamDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Edge" })
  edge?: shared.MetricEnumTwilioEdgeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMetricSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMetricRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMetricPathParams;

  @Metadata()
  queryParams: ListMetricQueryParams;

  @Metadata()
  security: ListMetricSecurity;
}


export class ListMetricListMetricResponseMeta extends SpeakeasyBase {
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


export class ListMetricListMetricResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListMetricListMetricResponseMeta;

  @Metadata({ data: "json, name=metrics", elemType: shared.InsightsV1CallMetric })
  metrics?: shared.InsightsV1CallMetric[];
}


export class ListMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMetricResponse?: ListMetricListMetricResponse;

  @Metadata()
  statusCode: number;
}
