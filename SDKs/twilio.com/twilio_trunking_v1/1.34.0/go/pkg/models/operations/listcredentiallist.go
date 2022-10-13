package operations

import (
	"openapi/pkg/models/shared"
)

var ListCredentialListServers = []string{
	"https://trunking.twilio.com",
}

type ListCredentialListPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type ListCredentialListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCredentialListRequest struct {
	ServerURL   *string
	PathParams  ListCredentialListPathParams
	QueryParams ListCredentialListQueryParams
	Security    ListCredentialListSecurity
}

type ListCredentialList200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCredentialList200ApplicationJSONListCredentialListResponse struct {
	CredentialLists []shared.TrunkingV1TrunkCredentialList    `json:"credential_lists"`
	Meta            *ListCredentialList200ApplicationJSONMeta `json:"meta"`
}

type ListCredentialListResponse struct {
	ContentType                string
	ListCredentialListResponse *ListCredentialList200ApplicationJSONListCredentialListResponse
	StatusCode                 int64
}
