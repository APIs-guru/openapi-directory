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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCredentialAws200ApplicationJSONListCredentialAwsResponse struct {
	Credentials []shared.AccountsV1CredentialCredentialAws `json:"credentials"`
	Meta        *ListCredentialAws200ApplicationJSONMeta   `json:"meta"`
}

type ListCredentialAwsResponse struct {
	ContentType               string
	ListCredentialAwsResponse *ListCredentialAws200ApplicationJSONListCredentialAwsResponse
	StatusCode                int64
}
