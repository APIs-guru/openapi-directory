package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRecordingServerList = []string{
	"https://trunking.twilio.com",
}

type FetchRecordingPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type FetchRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRecordingRequest struct {
	ServerURL  *string
	PathParams FetchRecordingPathParams
	Security   FetchRecordingSecurity
}

type FetchRecordingResponse struct {
	ContentType              string
	StatusCode               int64
	TrunkingV1TrunkRecording *shared.TrunkingV1TrunkRecording
}
