package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrunkServers = []string{
	"https://trunking.twilio.com",
}

type ListTrunkQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTrunkRequest struct {
	ServerURL   *string
	QueryParams ListTrunkQueryParams
	Security    ListTrunkSecurity
}

type ListTrunk200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListTrunk200ApplicationJSONListTrunkResponse struct {
	Meta   *ListTrunk200ApplicationJSONMeta `json:"meta,omitempty"`
	Trunks []shared.TrunkingV1Trunk         `json:"trunks,omitempty"`
}

type ListTrunkResponse struct {
	ContentType       string
	ListTrunkResponse *ListTrunk200ApplicationJSONListTrunkResponse
	StatusCode        int64
}
