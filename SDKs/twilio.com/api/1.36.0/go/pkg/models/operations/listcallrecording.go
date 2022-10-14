package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListCallRecordingServers = []string{
	"https://api.twilio.com",
}

type ListCallRecordingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type ListCallRecordingQueryParams struct {
	DateCreated            *time.Time `queryParam:"style=form,explode=true,name=DateCreated"`
	DateCreatedLessThan    *time.Time `queryParam:"style=form,explode=true,name=DateCreated<"`
	DateCreatedGreaterThan *time.Time `queryParam:"style=form,explode=true,name=DateCreated>"`
	PageSize               *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCallRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCallRecordingRequest struct {
	ServerURL   *string
	PathParams  ListCallRecordingPathParams
	QueryParams ListCallRecordingQueryParams
	Security    ListCallRecordingSecurity
}

type ListCallRecording200ApplicationJSONListCallRecordingResponse struct {
	End             *int64                                    `json:"end,omitempty"`
	FirstPageURI    *string                                   `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                   `json:"next_page_uri,omitempty"`
	Page            *int64                                    `json:"page,omitempty"`
	PageSize        *int64                                    `json:"page_size,omitempty"`
	PreviousPageURI *string                                   `json:"previous_page_uri,omitempty"`
	Recordings      []shared.APIV2010AccountCallCallRecording `json:"recordings,omitempty"`
	Start           *int64                                    `json:"start,omitempty"`
	URI             *string                                   `json:"uri,omitempty"`
}

type ListCallRecordingResponse struct {
	ContentType               string
	ListCallRecordingResponse *ListCallRecording200ApplicationJSONListCallRecordingResponse
	StatusCode                int64
}
