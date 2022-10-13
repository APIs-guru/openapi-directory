package operations

import (
	"openapi/pkg/models/shared"
)

var ListEventServers = []string{
	"https://insights.twilio.com",
}

type ListEventPathParams struct {
	CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type ListEventQueryParams struct {
	Edge     *shared.EventEnumTwilioEdgeEnum `queryParam:"style=form,explode=true,name=Edge"`
	PageSize *int64                          `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEventRequest struct {
	ServerURL   *string
	PathParams  ListEventPathParams
	QueryParams ListEventQueryParams
	Security    ListEventSecurity
}

type ListEvent200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEvent200ApplicationJSONListEventResponse struct {
	Events []shared.InsightsV1CallEvent     `json:"events"`
	Meta   *ListEvent200ApplicationJSONMeta `json:"meta"`
}

type ListEventResponse struct {
	ContentType       string
	ListEventResponse *ListEvent200ApplicationJSONListEventResponse
	StatusCode        int64
}
