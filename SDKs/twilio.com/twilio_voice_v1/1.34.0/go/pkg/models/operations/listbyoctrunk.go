package operations

import (
	"openapi/pkg/models/shared"
)

var ListByocTrunkServers = []string{
	"https://voice.twilio.com",
}

type ListByocTrunkQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListByocTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListByocTrunkRequest struct {
	ServerURL   *string
	QueryParams ListByocTrunkQueryParams
	Security    ListByocTrunkSecurity
}

type ListByocTrunk200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListByocTrunk200ApplicationJSONListByocTrunkResponse struct {
	ByocTrunks []shared.VoiceV1ByocTrunk            `json:"byoc_trunks"`
	Meta       *ListByocTrunk200ApplicationJSONMeta `json:"meta"`
}

type ListByocTrunkResponse struct {
	ContentType           string
	ListByocTrunkResponse *ListByocTrunk200ApplicationJSONListByocTrunkResponse
	StatusCode            int64
}
