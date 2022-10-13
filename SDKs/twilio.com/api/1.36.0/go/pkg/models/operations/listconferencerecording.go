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

type ListConferenceRecording200ApplicationJSONListConferenceRecordingResponse struct {
	End             *int64                                                `json:"end"`
	FirstPageURI    *string                                               `json:"first_page_uri"`
	NextPageURI     *string                                               `json:"next_page_uri"`
	Page            *int64                                                `json:"page"`
	PageSize        *int64                                                `json:"page_size"`
	PreviousPageURI *string                                               `json:"previous_page_uri"`
	Recordings      []shared.APIV2010AccountConferenceConferenceRecording `json:"recordings"`
	Start           *int64                                                `json:"start"`
	URI             *string                                               `json:"uri"`
}

type ListConferenceRecordingResponse struct {
	ContentType                     string
	ListConferenceRecordingResponse *ListConferenceRecording200ApplicationJSONListConferenceRecordingResponse
	StatusCode                      int64
}
