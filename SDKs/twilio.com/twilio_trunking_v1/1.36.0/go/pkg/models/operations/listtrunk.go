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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTrunk200ApplicationJSONListTrunkResponse struct {
	Meta   *ListTrunk200ApplicationJSONMeta `json:"meta"`
	Trunks []shared.TrunkingV1Trunk         `json:"trunks"`
}

type ListTrunkResponse struct {
	ContentType       string
	ListTrunkResponse *ListTrunk200ApplicationJSONListTrunkResponse
	StatusCode        int64
}
