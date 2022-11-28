package operations

import (
	"openapi/pkg/models/shared"
)

var ListSinkServerList = []string{
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

type ListSinkListSinkResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSinkListSinkResponse struct {
	Meta  *ListSinkListSinkResponseMeta `json:"meta,omitempty"`
	Sinks []shared.EventsV1Sink         `json:"sinks,omitempty"`
}

type ListSinkRequest struct {
	ServerURL   *string
	QueryParams ListSinkQueryParams
	Security    ListSinkSecurity
}

type ListSinkResponse struct {
	ContentType      string
	ListSinkResponse *ListSinkListSinkResponse
	StatusCode       int64
}
