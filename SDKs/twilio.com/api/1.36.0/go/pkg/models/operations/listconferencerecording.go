package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListConferenceRecordingServers = []string{
	"https://api.twilio.com",
}

type ListConferenceRecordingPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type ListConferenceRecordingQueryParams struct {
	DateCreated            *time.Time `queryParam:"style=form,explode=true,name=DateCreated"`
	DateCreatedLessThan    *time.Time `queryParam:"style=form,explode=true,name=DateCreated<"`
	DateCreatedGreaterThan *time.Time `queryParam:"style=form,explode=true,name=DateCreated>"`
	PageSize               *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConferenceRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConferenceRecordingRequest struct {
	ServerURL   *string
	PathParams  ListConferenceRecordingPathParams
	QueryParams ListConferenceRecordingQueryParams
	Security    ListConferenceRecordingSecurity
}

type ListConferenceRecordingListConferenceRecordingResponse struct {
	End             *int64                                                `json:"end,omitempty"`
	FirstPageURI    *string                                               `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                               `json:"next_page_uri,omitempty"`
	Page            *int64                                                `json:"page,omitempty"`
	PageSize        *int64                                                `json:"page_size,omitempty"`
	PreviousPageURI *string                                               `json:"previous_page_uri,omitempty"`
	Recordings      []shared.APIV2010AccountConferenceConferenceRecording `json:"recordings,omitempty"`
	Start           *int64                                                `json:"start,omitempty"`
	URI             *string                                               `json:"uri,omitempty"`
}

type ListConferenceRecordingResponse struct {
	ContentType                     string
	ListConferenceRecordingResponse *ListConferenceRecordingListConferenceRecordingResponse
	StatusCode                      int64
}
