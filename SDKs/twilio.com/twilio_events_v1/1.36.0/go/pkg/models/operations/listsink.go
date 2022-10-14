package operations

import (
	"openapi/pkg/models/shared"
)

var ListSinkServers = []string{
	"https://events.twilio.com",
}

type ListSinkQueryParams struct {
	InUse    *bool   `queryParam:"style=form,explode=true,name=InUse"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	Status   *string `queryParam:"style=form,explode=true,name=Status"`
}

type ListSinkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSinkRequest struct {
	ServerURL   *string
	QueryParams ListSinkQueryParams
	Security    ListSinkSecurity
}

type ListSink200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSink200ApplicationJSONListSinkResponse struct {
	Meta  *ListSink200ApplicationJSONMeta `json:"meta,omitempty"`
	Sinks []shared.EventsV1Sink           `json:"sinks,omitempty"`
}

type ListSinkResponse struct {
	ContentType      string
	ListSinkResponse *ListSink200ApplicationJSONListSinkResponse
	StatusCode       int64
}
