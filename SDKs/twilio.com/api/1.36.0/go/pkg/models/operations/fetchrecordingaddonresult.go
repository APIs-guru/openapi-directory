package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRecordingAddOnResultServers = []string{
	"https://api.twilio.com",
}

type FetchRecordingAddOnResultPathParams struct {
	AccountSid   string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ReferenceSid string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRecordingAddOnResultSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRecordingAddOnResultRequest struct {
	ServerURL  *string
	PathParams FetchRecordingAddOnResultPathParams
	Security   FetchRecordingAddOnResultSecurity
}

type FetchRecordingAddOnResultResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	APIV2010AccountRecordingRecordingAddOnResult *shared.APIV2010AccountRecordingRecordingAddOnResult
}
