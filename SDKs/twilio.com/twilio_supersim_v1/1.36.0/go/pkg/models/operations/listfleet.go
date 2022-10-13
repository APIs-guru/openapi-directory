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

type ListFleet200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFleet200ApplicationJSONListFleetResponse struct {
	Fleets []shared.SupersimV1Fleet         `json:"fleets"`
	Meta   *ListFleet200ApplicationJSONMeta `json:"meta"`
}

type ListFleetResponse struct {
	ContentType       string
	ListFleetResponse *ListFleet200ApplicationJSONListFleetResponse
	StatusCode        int64
}
