package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteParticipantServerList = []string{
	"https://api.twilio.com",
}

type DeleteParticipantPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid       string `pathParam:"style=simple,explode=false,name=CallSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type DeleteParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteParticipantRequest struct {
	ServerURL  *string
	PathParams DeleteParticipantPathParams
	Security   DeleteParticipantSecurity
}

type DeleteParticipantResponse struct {
	ContentType string
	StatusCode  int64
}
