package operations

import (
	"openapi/pkg/models/shared"
)

var ListConnectAppServers = []string{
	"https://api.twilio.com",
}

type ListConnectAppPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListConnectAppQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConnectAppSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConnectAppRequest struct {
	ServerURL   *string
	PathParams  ListConnectAppPathParams
	QueryParams ListConnectAppQueryParams
	Security    ListConnectAppSecurity
}

type ListConnectApp200ApplicationJSONListConnectAppResponse struct {
	ConnectApps     []shared.APIV2010AccountConnectApp `json:"connect_apps"`
	End             *int64                             `json:"end"`
	FirstPageURI    *string                            `json:"first_page_uri"`
	NextPageURI     *string                            `json:"next_page_uri"`
	Page            *int64                             `json:"page"`
	PageSize        *int64                             `json:"page_size"`
	PreviousPageURI *string                            `json:"previous_page_uri"`
	Start           *int64                             `json:"start"`
	URI             *string                            `json:"uri"`
}

type ListConnectAppResponse struct {
	ContentType            string
	ListConnectAppResponse *ListConnectApp200ApplicationJSONListConnectAppResponse
	StatusCode             int64
}
