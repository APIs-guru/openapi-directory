package operations

import (
	"openapi/pkg/models/shared"
)

var ListSigningKeyServers = []string{
	"https://api.twilio.com",
}

type ListSigningKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListSigningKeyQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSigningKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSigningKeyRequest struct {
	ServerURL   *string
	PathParams  ListSigningKeyPathParams
	QueryParams ListSigningKeyQueryParams
	Security    ListSigningKeySecurity
}

type ListSigningKey200ApplicationJSONListSigningKeyResponse struct {
	End             *int64                             `json:"end"`
	FirstPageURI    *string                            `json:"first_page_uri"`
	NextPageURI     *string                            `json:"next_page_uri"`
	Page            *int64                             `json:"page"`
	PageSize        *int64                             `json:"page_size"`
	PreviousPageURI *string                            `json:"previous_page_uri"`
	SigningKeys     []shared.APIV2010AccountSigningKey `json:"signing_keys"`
	Start           *int64                             `json:"start"`
	URI             *string                            `json:"uri"`
}

type ListSigningKeyResponse struct {
	ContentType            string
	ListSigningKeyResponse *ListSigningKey200ApplicationJSONListSigningKeyResponse
	StatusCode             int64
}
