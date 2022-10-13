package operations

import (
	"openapi/pkg/models/shared"
)

var ListMetricServers = []string{
	"https://insights.twilio.com",
}

type ListMetricPathParams struct {
	CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type ListMetricQueryParams struct {
	Direction *shared.MetricEnumStreamDirectionEnum `queryParam:"style=form,explode=true,name=Direction"`
	Edge      *shared.MetricEnumTwilioEdgeEnum      `queryParam:"style=form,explode=true,name=Edge"`
	PageSize  *int64                                `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMetricSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMetricRequest struct {
	ServerURL   *string
	PathParams  ListMetricPathParams
	QueryParams ListMetricQueryParams
	Security    ListMetricSecurity
}

type ListMetric200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMetric200ApplicationJSONListMetricResponse struct {
	Meta    *ListMetric200ApplicationJSONMeta `json:"meta"`
	Metrics []shared.InsightsV1CallMetric     `json:"metrics"`
}

type ListMetricResponse struct {
	ContentType        string
	ListMetricResponse *ListMetric200ApplicationJSONListMetricResponse
	StatusCode         int64
}
