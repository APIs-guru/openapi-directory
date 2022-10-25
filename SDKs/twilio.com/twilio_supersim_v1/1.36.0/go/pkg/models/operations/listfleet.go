package operations

import (
	"openapi/pkg/models/shared"
)

var ListFleetServers = []string{
	"https://supersim.twilio.com",
}

type ListFleetQueryParams struct {
	NetworkAccessProfile *string `queryParam:"style=form,explode=true,name=NetworkAccessProfile"`
	PageSize             *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFleetRequest struct {
	ServerURL   *string
	QueryParams ListFleetQueryParams
	Security    ListFleetSecurity
}

type ListFleetListFleetResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFleetListFleetResponse struct {
	Fleets []shared.SupersimV1Fleet        `json:"fleets,omitempty"`
	Meta   *ListFleetListFleetResponseMeta `json:"meta,omitempty"`
}

type ListFleetResponse struct {
	ContentType       string
	ListFleetResponse *ListFleetListFleetResponse
	StatusCode        int64
}
