package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCallRecordingServerList = []string{
	"https://api.twilio.com",
}

type FetchCallRecordingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCallRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCallRecordingRequest struct {
	ServerURL  *string
	PathParams FetchCallRecordingPathParams
	Security   FetchCallRecordingSecurity
}

type FetchCallRecordingResponse struct {
	ContentType                      string
	StatusCode                       int64
	APIV2010AccountCallCallRecording *shared.APIV2010AccountCallCallRecording
}
