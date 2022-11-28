package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListConferenceServerList = []string{
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

type ListConferenceListConferenceResponse struct {
	Conferences     []shared.APIV2010AccountConference `json:"conferences,omitempty"`
	End             *int64                             `json:"end,omitempty"`
	FirstPageURI    *string                            `json:"first_page_uri,omitempty"`
	NextPageURI     *string                            `json:"next_page_uri,omitempty"`
	Page            *int64                             `json:"page,omitempty"`
	PageSize        *int64                             `json:"page_size,omitempty"`
	PreviousPageURI *string                            `json:"previous_page_uri,omitempty"`
	Start           *int64                             `json:"start,omitempty"`
	URI             *string                            `json:"uri,omitempty"`
}

type ListConferenceRequest struct {
	ServerURL   *string
	PathParams  ListConferencePathParams
	QueryParams ListConferenceQueryParams
	Security    ListConferenceSecurity
}

type ListConferenceResponse struct {
	ContentType            string
	ListConferenceResponse *ListConferenceListConferenceResponse
	StatusCode             int64
}
