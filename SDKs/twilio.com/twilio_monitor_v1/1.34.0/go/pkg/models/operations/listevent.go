package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListEventServers = []string{
	"https://monitor.twilio.com",
}

type ListEventQueryParams struct {
	ActorSid        *string    `queryParam:"style=form,explode=true,name=ActorSid"`
	EndDate         *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	EventType       *string    `queryParam:"style=form,explode=true,name=EventType"`
	PageSize        *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	ResourceSid     *string    `queryParam:"style=form,explode=true,name=ResourceSid"`
	SourceIPAddress *string    `queryParam:"style=form,explode=true,name=SourceIpAddress"`
	StartDate       *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEventRequest struct {
	ServerURL   *string
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
	Events []shared.MonitorV1Event          `json:"events"`
	Meta   *ListEvent200ApplicationJSONMeta `json:"meta"`
}

type ListEventResponse struct {
	ContentType       string
	ListEventResponse *ListEvent200ApplicationJSONListEventResponse
	StatusCode        int64
}
