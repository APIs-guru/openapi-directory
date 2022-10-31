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

type ListApplicationListApplicationResponse struct {
	Applications    []shared.APIV2010AccountApplication `json:"applications,omitempty"`
	End             *int64                              `json:"end,omitempty"`
	FirstPageURI    *string                             `json:"first_page_uri,omitempty"`
	NextPageURI     *string                             `json:"next_page_uri,omitempty"`
	Page            *int64                              `json:"page,omitempty"`
	PageSize        *int64                              `json:"page_size,omitempty"`
	PreviousPageURI *string                             `json:"previous_page_uri,omitempty"`
	Start           *int64                              `json:"start,omitempty"`
	URI             *string                             `json:"uri,omitempty"`
}

type ListApplicationResponse struct {
	ContentType             string
	ListApplicationResponse *ListApplicationListApplicationResponse
	StatusCode              int64
}
