package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListConferenceServers = []string{
	"https://api.twilio.com",
}

type ListConferencePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListConferenceQueryParams struct {
	DateCreated            *time.Time                       `queryParam:"style=form,explode=true,name=DateCreated"`
	DateCreatedLessThan    *time.Time                       `queryParam:"style=form,explode=true,name=DateCreated<"`
	DateCreatedGreaterThan *time.Time                       `queryParam:"style=form,explode=true,name=DateCreated>"`
	DateUpdated            *time.Time                       `queryParam:"style=form,explode=true,name=DateUpdated"`
	DateUpdatedLessThan    *time.Time                       `queryParam:"style=form,explode=true,name=DateUpdated<"`
	DateUpdatedGreaterThan *time.Time                       `queryParam:"style=form,explode=true,name=DateUpdated>"`
	FriendlyName           *string                          `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize               *int64                           `queryParam:"style=form,explode=true,name=PageSize"`
	Status                 *shared.ConferenceEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListConferenceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConferenceRequest struct {
	ServerURL   *string
	PathParams  ListConferencePathParams
	QueryParams ListConferenceQueryParams
	Security    ListConferenceSecurity
}

type ListConference200ApplicationJSONListConferenceResponse struct {
	Conferences     []shared.APIV2010AccountConference `json:"conferences"`
	End             *int64                             `json:"end"`
	FirstPageURI    *string                            `json:"first_page_uri"`
	NextPageURI     *string                            `json:"next_page_uri"`
	Page            *int64                             `json:"page"`
	PageSize        *int64                             `json:"page_size"`
	PreviousPageURI *string                            `json:"previous_page_uri"`
	Start           *int64                             `json:"start"`
	URI             *string                            `json:"uri"`
}

type ListConferenceResponse struct {
	ContentType            string
	ListConferenceResponse *ListConference200ApplicationJSONListConferenceResponse
	StatusCode             int64
}
