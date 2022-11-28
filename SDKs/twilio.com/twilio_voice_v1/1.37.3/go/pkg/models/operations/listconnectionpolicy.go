package operations

import (
	"openapi/pkg/models/shared"
)

var ListConnectionPolicyServerList = []string{
	"https://voice.twilio.com",
}

type ListConnectionPolicyQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConnectionPolicySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConnectionPolicyListConnectionPolicyResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConnectionPolicyListConnectionPolicyResponse struct {
	ConnectionPolicies []shared.VoiceV1ConnectionPolicy                      `json:"connection_policies,omitempty"`
	Meta               *ListConnectionPolicyListConnectionPolicyResponseMeta `json:"meta,omitempty"`
}

type ListConnectionPolicyRequest struct {
	ServerURL   *string
	QueryParams ListConnectionPolicyQueryParams
	Security    ListConnectionPolicySecurity
}

type ListConnectionPolicyResponse struct {
	ContentType                  string
	ListConnectionPolicyResponse *ListConnectionPolicyListConnectionPolicyResponse
	StatusCode                   int64
}
