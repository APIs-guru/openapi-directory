import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMetricServerList = [
	"https://insights.twilio.com",
] as const;


export class ListMetricPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class ListMetricQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: shared.MetricEnumStreamDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Edge" })
  edge?: shared.MetricEnumTwilioEdgeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMetricSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMetricListMetricResponseMeta extends SpeakeasyBase {
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


export class ListMetricListMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMetricListMetricResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: shared.InsightsV1CallMetric })
  metrics?: shared.InsightsV1CallMetric[];
}


export class ListMetricRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListMetricPathParams;

  @SpeakeasyMetadata()
  queryParams: ListMetricQueryParams;

  @SpeakeasyMetadata()
  security: ListMetricSecurity;
}


export class ListMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMetricResponse?: ListMetricListMetricResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
