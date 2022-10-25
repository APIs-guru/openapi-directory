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

type ListEventListEventResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEventListEventResponse struct {
	Events []shared.MonitorV1Event         `json:"events,omitempty"`
	Meta   *ListEventListEventResponseMeta `json:"meta,omitempty"`
}

type ListEventResponse struct {
	ContentType       string
	ListEventResponse *ListEventListEventResponse
	StatusCode        int64
}
