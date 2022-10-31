package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMediaRecordingServers = []string{
	"https://media.twilio.com",
}

type FetchMediaRecordingPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMediaRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMediaRecordingRequest struct {
	ServerURL  *string
	PathParams FetchMediaRecordingPathParams
	Security   FetchMediaRecordingSecurity
}

type FetchMediaRecordingResponse struct {
	ContentType           string
	StatusCode            int64
	MediaV1MediaRecording *shared.MediaV1MediaRecording
}
