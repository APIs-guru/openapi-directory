package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRecordingServers = []string{
	"https://trunking.twilio.com",
}

type UpdateRecordingPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type UpdateRecordingRequestBodyUpdateRecordingRequest struct {
	Mode *shared.RecordingEnumRecordingModeEnum `form:"name=Mode"`
	Trim *shared.RecordingEnumRecordingTrimEnum `form:"name=Trim"`
}

type UpdateRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRecordingRequest struct {
	ServerURL  *string
	PathParams UpdateRecordingPathParams
	Request    *UpdateRecordingRequestBodyUpdateRecordingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateRecordingSecurity
}

type UpdateRecordingResponse struct {
	ContentType              string
	StatusCode               int64
	TrunkingV1TrunkRecording *shared.TrunkingV1TrunkRecording
}
