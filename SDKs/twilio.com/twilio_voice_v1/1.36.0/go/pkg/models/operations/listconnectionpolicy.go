package operations

import (
	"openapi/pkg/models/shared"
)

var ListConnectionPolicyServers = []string{
	"https://voice.twilio.com",
}

type ListConnectionPolicyQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConnectionPolicySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConnectionPolicyRequest struct {
	ServerURL   *string
	QueryParams ListConnectionPolicyQueryParams
	Security    ListConnectionPolicySecurity
}

type ListConnectionPolicy200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConnectionPolicy200ApplicationJSONListConnectionPolicyResponse struct {
	ConnectionPolicies []shared.VoiceV1ConnectionPolicy            `json:"connection_policies"`
	Meta               *ListConnectionPolicy200ApplicationJSONMeta `json:"meta"`
}

type ListConnectionPolicyResponse struct {
	ContentType                  string
	ListConnectionPolicyResponse *ListConnectionPolicy200ApplicationJSONListConnectionPolicyResponse
	StatusCode                   int64
}
