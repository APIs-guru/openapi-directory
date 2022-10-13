package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteParticipantServers = []string{
	"https://proxy.twilio.com",
}

type DeleteParticipantPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	SessionSid string `pathParam:"style=simple,explode=false,name=SessionSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
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
