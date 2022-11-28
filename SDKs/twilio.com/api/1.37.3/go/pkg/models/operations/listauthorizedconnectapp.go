package operations

import (
	"openapi/pkg/models/shared"
)

var ListAuthorizedConnectAppServerList = []string{
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

type ListAuthorizedConnectAppListAuthorizedConnectAppResponse struct {
	AuthorizedConnectApps []shared.APIV2010AccountAuthorizedConnectApp `json:"authorized_connect_apps,omitempty"`
	End                   *int64                                       `json:"end,omitempty"`
	FirstPageURI          *string                                      `json:"first_page_uri,omitempty"`
	NextPageURI           *string                                      `json:"next_page_uri,omitempty"`
	Page                  *int64                                       `json:"page,omitempty"`
	PageSize              *int64                                       `json:"page_size,omitempty"`
	PreviousPageURI       *string                                      `json:"previous_page_uri,omitempty"`
	Start                 *int64                                       `json:"start,omitempty"`
	URI                   *string                                      `json:"uri,omitempty"`
}

type ListAuthorizedConnectAppRequest struct {
	ServerURL   *string
	PathParams  ListAuthorizedConnectAppPathParams
	QueryParams ListAuthorizedConnectAppQueryParams
	Security    ListAuthorizedConnectAppSecurity
}

type ListAuthorizedConnectAppResponse struct {
	ContentType                      string
	ListAuthorizedConnectAppResponse *ListAuthorizedConnectAppListAuthorizedConnectAppResponse
	StatusCode                       int64
}
