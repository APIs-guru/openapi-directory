package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRecordingServerList = []string{
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

type ListRecordingListRecordingResponse struct {
	End             *int64                            `json:"end,omitempty"`
	FirstPageURI    *string                           `json:"first_page_uri,omitempty"`
	NextPageURI     *string                           `json:"next_page_uri,omitempty"`
	Page            *int64                            `json:"page,omitempty"`
	PageSize        *int64                            `json:"page_size,omitempty"`
	PreviousPageURI *string                           `json:"previous_page_uri,omitempty"`
	Recordings      []shared.APIV2010AccountRecording `json:"recordings,omitempty"`
	Start           *int64                            `json:"start,omitempty"`
	URI             *string                           `json:"uri,omitempty"`
}

type ListRecordingRequest struct {
	ServerURL   *string
	PathParams  ListRecordingPathParams
	QueryParams ListRecordingQueryParams
	Security    ListRecordingSecurity
}

type ListRecordingResponse struct {
	ContentType           string
	ListRecordingResponse *ListRecordingListRecordingResponse
	StatusCode            int64
}
