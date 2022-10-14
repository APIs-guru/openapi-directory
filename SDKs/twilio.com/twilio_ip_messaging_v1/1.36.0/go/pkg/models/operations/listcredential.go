package operations

import (
	"openapi/pkg/models/shared"
)

var ListCredentialServers = []string{
	"https://ip-messaging.twilio.com",
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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCredential200ApplicationJSONListCredentialResponse struct {
	Credentials []shared.IPMessagingV1Credential      `json:"credentials,omitempty"`
	Meta        *ListCredential200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListCredentialResponse struct {
	ContentType            string
	ListCredentialResponse *ListCredential200ApplicationJSONListCredentialResponse
	StatusCode             int64
}
