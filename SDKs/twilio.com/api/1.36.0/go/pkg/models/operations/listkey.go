package operations

import (
	"openapi/pkg/models/shared"
)

var ListKeyServers = []string{
	"https://api.twilio.com",
}

type ListKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListKeyQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListKeyRequest struct {
	ServerURL   *string
	PathParams  ListKeyPathParams
	QueryParams ListKeyQueryParams
	Security    ListKeySecurity
}

type ListKeyListKeyResponse struct {
	End             *int64                      `json:"end,omitempty"`
	FirstPageURI    *string                     `json:"first_page_uri,omitempty"`
	Keys            []shared.APIV2010AccountKey `json:"keys,omitempty"`
	NextPageURI     *string                     `json:"next_page_uri,omitempty"`
	Page            *int64                      `json:"page,omitempty"`
	PageSize        *int64                      `json:"page_size,omitempty"`
	PreviousPageURI *string                     `json:"previous_page_uri,omitempty"`
	Start           *int64                      `json:"start,omitempty"`
	URI             *string                     `json:"uri,omitempty"`
}

type ListKeyResponse struct {
	ContentType     string
	ListKeyResponse *ListKeyListKeyResponse
	StatusCode      int64
}
