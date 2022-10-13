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

type ListMedia200ApplicationJSONListMediaResponse struct {
	End             *int64                               `json:"end"`
	FirstPageURI    *string                              `json:"first_page_uri"`
	MediaList       []shared.APIV2010AccountMessageMedia `json:"media_list"`
	NextPageURI     *string                              `json:"next_page_uri"`
	Page            *int64                               `json:"page"`
	PageSize        *int64                               `json:"page_size"`
	PreviousPageURI *string                              `json:"previous_page_uri"`
	Start           *int64                               `json:"start"`
	URI             *string                              `json:"uri"`
}

type ListMediaResponse struct {
	ContentType       string
	ListMediaResponse *ListMedia200ApplicationJSONListMediaResponse
	StatusCode        int64
}
