import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListMetricServerList: readonly ["https://insights.twilio.com"];
export declare class ListMetricPathParams extends SpeakeasyBase {
    callSid: string;
}
export declare class ListMetricQueryParams extends SpeakeasyBase {
    direction?: shared.MetricEnumStreamDirectionEnum;
    edge?: shared.MetricEnumTwilioEdgeEnum;
    pageSize?: number;
}
export declare class ListMetricSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMetricListMetricResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMetricListMetricResponse extends SpeakeasyBase {
    meta?: ListMetricListMetricResponseMeta;
    metrics?: shared.InsightsV1CallMetric[];
}
export declare class ListMetricRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListMetricPathParams;
    queryParams: ListMetricQueryParams;
    security: ListMetricSecurity;
}
export declare class ListMetricResponse extends SpeakeasyBase {
    contentType: string;
    listMetricResponse?: ListMetricListMetricResponse;
    statusCode: number;
}
