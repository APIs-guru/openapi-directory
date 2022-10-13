package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRecordingServers = []string{
	"https://api.twilio.com",
}

type ListRecordingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListRecordingQueryParams struct {
	CallSid                *string    `queryParam:"style=form,explode=true,name=CallSid"`
	ConferenceSid          *string    `queryParam:"style=form,explode=true,name=ConferenceSid"`
	DateCreated            *time.Time `queryParam:"style=form,explode=true,name=DateCreated"`
	DateCreatedLessThan    *time.Time `queryParam:"style=form,explode=true,name=DateCreated<"`
	DateCreatedGreaterThan *time.Time `queryParam:"style=form,explode=true,name=DateCreated>"`
	IncludeSoftDeleted     *bool      `queryParam:"style=form,explode=true,name=IncludeSoftDeleted"`
	PageSize               *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRecordingRequest struct {
	ServerURL   *string
	PathParams  ListRecordingPathParams
	QueryParams ListRecordingQueryParams
	Security    ListRecordingSecurity
}

type ListRecording200ApplicationJSONListRecordingResponse struct {
	End             *int64                            `json:"end"`
	FirstPageURI    *string                           `json:"first_page_uri"`
	NextPageURI     *string                           `json:"next_page_uri"`
	Page            *int64                            `json:"page"`
	PageSize        *int64                            `json:"page_size"`
	PreviousPageURI *string                           `json:"previous_page_uri"`
	Recordings      []shared.APIV2010AccountRecording `json:"recordings"`
	Start           *int64                            `json:"start"`
	URI             *string                           `json:"uri"`
}

type ListRecordingResponse struct {
	ContentType           string
	ListRecordingResponse *ListRecording200ApplicationJSONListRecordingResponse
	StatusCode            int64
}
