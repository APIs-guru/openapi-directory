package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRecordingServerList = []string{
	"https://api.twilio.com",
}

type FetchRecordingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRecordingQueryParams struct {
	IncludeSoftDeleted *bool `queryParam:"style=form,explode=true,name=IncludeSoftDeleted"`
}

type FetchRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRecordingRequest struct {
	ServerURL   *string
	PathParams  FetchRecordingPathParams
	QueryParams FetchRecordingQueryParams
	Security    FetchRecordingSecurity
}

type FetchRecordingResponse struct {
	ContentType              string
	StatusCode               int64
	APIV2010AccountRecording *shared.APIV2010AccountRecording
}
