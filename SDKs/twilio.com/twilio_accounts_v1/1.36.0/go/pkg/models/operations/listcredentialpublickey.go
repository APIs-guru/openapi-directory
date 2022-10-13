package operations

import (
	"openapi/pkg/models/shared"
)

var ListCredentialPublicKeyServers = []string{
	"https://accounts.twilio.com",
}

type ListCredentialPublicKeyQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCredentialPublicKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCredentialPublicKeyRequest struct {
	ServerURL   *string
	QueryParams ListCredentialPublicKeyQueryParams
	Security    ListCredentialPublicKeySecurity
}

type ListCredentialPublicKey200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCredentialPublicKey200ApplicationJSONListCredentialPublicKeyResponse struct {
	Credentials []shared.AccountsV1CredentialCredentialPublicKey `json:"credentials"`
	Meta        *ListCredentialPublicKey200ApplicationJSONMeta   `json:"meta"`
}

type ListCredentialPublicKeyResponse struct {
	ContentType                     string
	ListCredentialPublicKeyResponse *ListCredentialPublicKey200ApplicationJSONListCredentialPublicKeyResponse
	StatusCode                      int64
}
