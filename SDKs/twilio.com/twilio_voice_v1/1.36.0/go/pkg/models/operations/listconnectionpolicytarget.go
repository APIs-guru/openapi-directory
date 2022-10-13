package operations

import (
	"openapi/pkg/models/shared"
)

var ListConnectionPolicyTargetServers = []string{
	"https://voice.twilio.com",
}

type ListConnectionPolicyTargetPathParams struct {
	ConnectionPolicySid string `pathParam:"style=simple,explode=false,name=ConnectionPolicySid"`
}

type ListConnectionPolicyTargetQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConnectionPolicyTargetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConnectionPolicyTargetRequest struct {
	ServerURL   *string
	PathParams  ListConnectionPolicyTargetPathParams
	QueryParams ListConnectionPolicyTargetQueryParams
	Security    ListConnectionPolicyTargetSecurity
}

type ListConnectionPolicyTarget200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConnectionPolicyTarget200ApplicationJSONListConnectionPolicyTargetResponse struct {
	Meta    *ListConnectionPolicyTarget200ApplicationJSONMeta      `json:"meta"`
	Targets []shared.VoiceV1ConnectionPolicyConnectionPolicyTarget `json:"targets"`
}

type ListConnectionPolicyTargetResponse struct {
	ContentType                        string
	ListConnectionPolicyTargetResponse *ListConnectionPolicyTarget200ApplicationJSONListConnectionPolicyTargetResponse
	StatusCode                         int64
}
