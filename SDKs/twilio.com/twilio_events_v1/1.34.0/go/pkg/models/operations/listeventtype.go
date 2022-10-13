package operations

import (
	"openapi/pkg/models/shared"
)

var ListEventTypeServers = []string{
	"https://events.twilio.com",
}

type ListEventTypeQueryParams struct {
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	SchemaID *string `queryParam:"style=form,explode=true,name=SchemaId"`
}

type ListEventTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEventTypeRequest struct {
	ServerURL   *string
	QueryParams ListEventTypeQueryParams
	Security    ListEventTypeSecurity
}

type ListEventType200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEventType200ApplicationJSONListEventTypeResponse struct {
	Meta  *ListEventType200ApplicationJSONMeta `json:"meta"`
	Types []shared.EventsV1EventType           `json:"types"`
}

type ListEventTypeResponse struct {
	ContentType           string
	ListEventTypeResponse *ListEventType200ApplicationJSONListEventTypeResponse
	StatusCode            int64
}
