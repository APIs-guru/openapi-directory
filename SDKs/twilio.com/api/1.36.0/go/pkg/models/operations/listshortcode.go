package operations

import (
	"openapi/pkg/models/shared"
)

var ListShortCodeServers = []string{
	"https://api.twilio.com",
}

type ListShortCodePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListShortCodeQueryParams struct {
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	ShortCode    *string `queryParam:"style=form,explode=true,name=ShortCode"`
}

type ListShortCodeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListShortCodeRequest struct {
	ServerURL   *string
	PathParams  ListShortCodePathParams
	QueryParams ListShortCodeQueryParams
	Security    ListShortCodeSecurity
}

type ListShortCode200ApplicationJSONListShortCodeResponse struct {
	End             *int64                            `json:"end"`
	FirstPageURI    *string                           `json:"first_page_uri"`
	NextPageURI     *string                           `json:"next_page_uri"`
	Page            *int64                            `json:"page"`
	PageSize        *int64                            `json:"page_size"`
	PreviousPageURI *string                           `json:"previous_page_uri"`
	ShortCodes      []shared.APIV2010AccountShortCode `json:"short_codes"`
	Start           *int64                            `json:"start"`
	URI             *string                           `json:"uri"`
}

type ListShortCodeResponse struct {
	ContentType           string
	ListShortCodeResponse *ListShortCode200ApplicationJSONListShortCodeResponse
	StatusCode            int64
}
