package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteMediaRecordingServers = []string{
	"https://media.twilio.com",
}

type DeleteMediaRecordingPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteMediaRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMediaRecordingRequest struct {
	ServerURL  *string
	PathParams DeleteMediaRecordingPathParams
	Security   DeleteMediaRecordingSecurity
}

type DeleteMediaRecordingResponse struct {
	ContentType string
	StatusCode  int64
}
