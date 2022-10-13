package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConferenceRecordingServers = []string{
	"https://api.twilio.com",
}

type FetchConferenceRecordingPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
	Sid           string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchConferenceRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConferenceRecordingRequest struct {
	ServerURL  *string
	PathParams FetchConferenceRecordingPathParams
	Security   FetchConferenceRecordingSecurity
}

type FetchConferenceRecordingResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	APIV2010AccountConferenceConferenceRecording *shared.APIV2010AccountConferenceConferenceRecording
}
