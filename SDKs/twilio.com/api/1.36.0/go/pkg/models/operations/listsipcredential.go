package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipCredentialServers = []string{
	"https://api.twilio.com",
}

type ListSipCredentialPathParams struct {
	AccountSid        string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CredentialListSid string `pathParam:"style=simple,explode=false,name=CredentialListSid"`
}

type ListSipCredentialQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipCredentialRequest struct {
	ServerURL   *string
	PathParams  ListSipCredentialPathParams
	QueryParams ListSipCredentialQueryParams
	Security    ListSipCredentialSecurity
}

type ListSipCredential200ApplicationJSONListSipCredentialResponse struct {
	Credentials     []shared.APIV2010AccountSipSipCredentialListSipCredential `json:"credentials,omitempty"`
	End             *int64                                                    `json:"end,omitempty"`
	FirstPageURI    *string                                                   `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                   `json:"next_page_uri,omitempty"`
	Page            *int64                                                    `json:"page,omitempty"`
	PageSize        *int64                                                    `json:"page_size,omitempty"`
	PreviousPageURI *string                                                   `json:"previous_page_uri,omitempty"`
	Start           *int64                                                    `json:"start,omitempty"`
	URI             *string                                                   `json:"uri,omitempty"`
}

type ListSipCredentialResponse struct {
	ContentType               string
	ListSipCredentialResponse *ListSipCredential200ApplicationJSONListSipCredentialResponse
	StatusCode                int64
}
