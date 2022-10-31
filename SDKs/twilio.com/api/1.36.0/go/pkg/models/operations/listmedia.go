package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListMediaServers = []string{
	"https://api.twilio.com",
}

type ListMediaPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	MessageSid string `pathParam:"style=simple,explode=false,name=MessageSid"`
}

type ListMediaQueryParams struct {
	DateCreated            *time.Time `queryParam:"style=form,explode=true,name=DateCreated"`
	DateCreatedLessThan    *time.Time `queryParam:"style=form,explode=true,name=DateCreated<"`
	DateCreatedGreaterThan *time.Time `queryParam:"style=form,explode=true,name=DateCreated>"`
	PageSize               *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMediaSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMediaRequest struct {
	ServerURL   *string
	PathParams  ListMediaPathParams
	QueryParams ListMediaQueryParams
	Security    ListMediaSecurity
}

type ListMediaListMediaResponse struct {
	End             *int64                               `json:"end,omitempty"`
	FirstPageURI    *string                              `json:"first_page_uri,omitempty"`
	MediaList       []shared.APIV2010AccountMessageMedia `json:"media_list,omitempty"`
	NextPageURI     *string                              `json:"next_page_uri,omitempty"`
	Page            *int64                               `json:"page,omitempty"`
	PageSize        *int64                               `json:"page_size,omitempty"`
	PreviousPageURI *string                              `json:"previous_page_uri,omitempty"`
	Start           *int64                               `json:"start,omitempty"`
	URI             *string                              `json:"uri,omitempty"`
}

type ListMediaResponse struct {
	ContentType       string
	ListMediaResponse *ListMediaListMediaResponse
	StatusCode        int64
}
