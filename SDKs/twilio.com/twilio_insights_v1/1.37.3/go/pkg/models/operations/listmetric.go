package operations

import (
	"openapi/pkg/models/shared"
)

var ListMetricServerList = []string{
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

type ListMetricListMetricResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMetricListMetricResponse struct {
	Meta    *ListMetricListMetricResponseMeta `json:"meta,omitempty"`
	Metrics []shared.InsightsV1CallMetric     `json:"metrics,omitempty"`
}

type ListMetricRequest struct {
	ServerURL   *string
	PathParams  ListMetricPathParams
	QueryParams ListMetricQueryParams
	Security    ListMetricSecurity
}

type ListMetricResponse struct {
	ContentType        string
	ListMetricResponse *ListMetricListMetricResponse
	StatusCode         int64
}
