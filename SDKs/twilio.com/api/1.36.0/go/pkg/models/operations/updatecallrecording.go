package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCallRecordingServers = []string{
	"https://api.twilio.com",
}

type UpdateCallRecordingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateCallRecordingUpdateCallRecordingRequest struct {
	PauseBehavior *string                            `form:"name=PauseBehavior"`
	Status        shared.CallRecordingEnumStatusEnum `form:"name=Status"`
}

type UpdateCallRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCallRecordingRequest struct {
	ServerURL  *string
	PathParams UpdateCallRecordingPathParams
	Request    *UpdateCallRecordingUpdateCallRecordingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCallRecordingSecurity
}

type UpdateCallRecordingResponse struct {
	ContentType                      string
	StatusCode                       int64
	APIV2010AccountCallCallRecording *shared.APIV2010AccountCallCallRecording
}
