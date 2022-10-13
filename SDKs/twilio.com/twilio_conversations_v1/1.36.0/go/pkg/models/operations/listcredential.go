package operations

import (
	"openapi/pkg/models/shared"
)

var ListCredentialServers = []string{
	"https://conversations.twilio.com",
}

type ListCredentialQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCredentialRequest struct {
	ServerURL   *string
	QueryParams ListCredentialQueryParams
	Security    ListCredentialSecurity
}

type ListCredential200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCredential200ApplicationJSONListCredentialResponse struct {
	Credentials []shared.ConversationsV1Credential    `json:"credentials"`
	Meta        *ListCredential200ApplicationJSONMeta `json:"meta"`
}

type ListCredentialResponse struct {
	ContentType            string
	ListCredentialResponse *ListCredential200ApplicationJSONListCredentialResponse
	StatusCode             int64
}
