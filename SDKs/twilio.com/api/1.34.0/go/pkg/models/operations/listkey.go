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

type ListKey200ApplicationJSONListKeyResponse struct {
	End             *int64                      `json:"end"`
	FirstPageURI    *string                     `json:"first_page_uri"`
	Keys            []shared.APIV2010AccountKey `json:"keys"`
	NextPageURI     *string                     `json:"next_page_uri"`
	Page            *int64                      `json:"page"`
	PageSize        *int64                      `json:"page_size"`
	PreviousPageURI *string                     `json:"previous_page_uri"`
	Start           *int64                      `json:"start"`
	URI             *string                     `json:"uri"`
}

type ListKeyResponse struct {
	ContentType     string
	ListKeyResponse *ListKey200ApplicationJSONListKeyResponse
	StatusCode      int64
}
