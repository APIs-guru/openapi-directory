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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListByocTrunk200ApplicationJSONListByocTrunkResponse struct {
	ByocTrunks []shared.VoiceV1ByocTrunk            `json:"byoc_trunks,omitempty"`
	Meta       *ListByocTrunk200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListByocTrunkResponse struct {
	ContentType           string
	ListByocTrunkResponse *ListByocTrunk200ApplicationJSONListByocTrunkResponse
	StatusCode            int64
}
