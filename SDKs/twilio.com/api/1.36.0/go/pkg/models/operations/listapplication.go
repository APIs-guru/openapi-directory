package operations

import (
	"openapi/pkg/models/shared"
)

var ListApplicationServers = []string{
	"https://api.twilio.com",
}

type ListApplicationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListApplicationQueryParams struct {
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListApplicationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListApplicationRequest struct {
	ServerURL   *string
	PathParams  ListApplicationPathParams
	QueryParams ListApplicationQueryParams
	Security    ListApplicationSecurity
}

type ListApplication200ApplicationJSONListApplicationResponse struct {
	Applications    []shared.APIV2010AccountApplication `json:"applications"`
	End             *int64                              `json:"end"`
	FirstPageURI    *string                             `json:"first_page_uri"`
	NextPageURI     *string                             `json:"next_page_uri"`
	Page            *int64                              `json:"page"`
	PageSize        *int64                              `json:"page_size"`
	PreviousPageURI *string                             `json:"previous_page_uri"`
	Start           *int64                              `json:"start"`
	URI             *string                             `json:"uri"`
}

type ListApplicationResponse struct {
	ContentType             string
	ListApplicationResponse *ListApplication200ApplicationJSONListApplicationResponse
	StatusCode              int64
}
