package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConferenceRecordingServers = []string{
	"https://api.twilio.com",
}

type UpdateConferenceRecordingPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
	Sid           string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConferenceRecordingUpdateConferenceRecordingRequest struct {
	PauseBehavior *string                                  `form:"name=PauseBehavior"`
	Status        shared.ConferenceRecordingEnumStatusEnum `form:"name=Status"`
}

type UpdateConferenceRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConferenceRecordingRequest struct {
	ServerURL  *string
	PathParams UpdateConferenceRecordingPathParams
	Request    *UpdateConferenceRecordingUpdateConferenceRecordingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConferenceRecordingSecurity
}

type UpdateConferenceRecordingResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	APIV2010AccountConferenceConferenceRecording *shared.APIV2010AccountConferenceConferenceRecording
}
