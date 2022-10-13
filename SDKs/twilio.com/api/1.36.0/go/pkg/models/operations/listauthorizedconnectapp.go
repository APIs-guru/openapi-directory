package operations

import (
	"openapi/pkg/models/shared"
)

var ListAuthorizedConnectAppServers = []string{
	"https://api.twilio.com",
}

type ListAuthorizedConnectAppPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListAuthorizedConnectAppQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAuthorizedConnectAppSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAuthorizedConnectAppRequest struct {
	ServerURL   *string
	PathParams  ListAuthorizedConnectAppPathParams
	QueryParams ListAuthorizedConnectAppQueryParams
	Security    ListAuthorizedConnectAppSecurity
}

type ListAuthorizedConnectApp200ApplicationJSONListAuthorizedConnectAppResponse struct {
	AuthorizedConnectApps []shared.APIV2010AccountAuthorizedConnectApp `json:"authorized_connect_apps"`
	End                   *int64                                       `json:"end"`
	FirstPageURI          *string                                      `json:"first_page_uri"`
	NextPageURI           *string                                      `json:"next_page_uri"`
	Page                  *int64                                       `json:"page"`
	PageSize              *int64                                       `json:"page_size"`
	PreviousPageURI       *string                                      `json:"previous_page_uri"`
	Start                 *int64                                       `json:"start"`
	URI                   *string                                      `json:"uri"`
}

type ListAuthorizedConnectAppResponse struct {
	ContentType                      string
	ListAuthorizedConnectAppResponse *ListAuthorizedConnectApp200ApplicationJSONListAuthorizedConnectAppResponse
	StatusCode                       int64
}
