package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteRecordingAddOnResultServers = []string{
	"https://api.twilio.com",
}

type DeleteRecordingAddOnResultPathParams struct {
	AccountSid   string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ReferenceSid string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteRecordingAddOnResultSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteRecordingAddOnResultRequest struct {
	ServerURL  *string
	PathParams DeleteRecordingAddOnResultPathParams
	Security   DeleteRecordingAddOnResultSecurity
}

type DeleteRecordingAddOnResultResponse struct {
	ContentType string
	StatusCode  int64
}
