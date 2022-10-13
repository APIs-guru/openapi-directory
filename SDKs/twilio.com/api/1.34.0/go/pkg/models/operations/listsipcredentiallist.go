package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipCredentialListServers = []string{
	"https://api.twilio.com",
}

type ListSipCredentialListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListSipCredentialListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipCredentialListRequest struct {
	ServerURL   *string
	PathParams  ListSipCredentialListPathParams
	QueryParams ListSipCredentialListQueryParams
	Security    ListSipCredentialListSecurity
}

type ListSipCredentialList200ApplicationJSONListSipCredentialListResponse struct {
	CredentialLists []shared.APIV2010AccountSipSipCredentialList `json:"credential_lists"`
	End             *int64                                       `json:"end"`
	FirstPageURI    *string                                      `json:"first_page_uri"`
	NextPageURI     *string                                      `json:"next_page_uri"`
	Page            *int64                                       `json:"page"`
	PageSize        *int64                                       `json:"page_size"`
	PreviousPageURI *string                                      `json:"previous_page_uri"`
	Start           *int64                                       `json:"start"`
	URI             *string                                      `json:"uri"`
}

type ListSipCredentialListResponse struct {
	ContentType                   string
	ListSipCredentialListResponse *ListSipCredentialList200ApplicationJSONListSipCredentialListResponse
	StatusCode                    int64
}
