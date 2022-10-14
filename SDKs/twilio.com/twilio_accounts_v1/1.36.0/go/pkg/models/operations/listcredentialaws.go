package operations

import (
	"openapi/pkg/models/shared"
)

var ListCredentialAwsServers = []string{
	"https://accounts.twilio.com",
}

type ListCredentialAwsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCredentialAwsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCredentialAwsRequest struct {
	ServerURL   *string
	QueryParams ListCredentialAwsQueryParams
	Security    ListCredentialAwsSecurity
}

type ListCredentialAws200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListCredentialAws200ApplicationJSONListCredentialAwsResponse struct {
	Credentials []shared.AccountsV1CredentialCredentialAws `json:"credentials,omitempty"`
	Meta        *ListCredentialAws200ApplicationJSONMeta   `json:"meta,omitempty"`
}

type ListCredentialAwsResponse struct {
	ContentType               string
	ListCredentialAwsResponse *ListCredentialAws200ApplicationJSONListCredentialAwsResponse
	StatusCode                int64
}
