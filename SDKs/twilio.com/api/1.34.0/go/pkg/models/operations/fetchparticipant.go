package operations

import (
	"openapi/pkg/models/shared"
)

var FetchParticipantServers = []string{
	"https://api.twilio.com",
}

type FetchParticipantPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid       string `pathParam:"style=simple,explode=false,name=CallSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type FetchParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchParticipantRequest struct {
	ServerURL  *string
	PathParams FetchParticipantPathParams
	Security   FetchParticipantSecurity
}

type FetchParticipantResponse struct {
	ContentType                          string
	StatusCode                           int64
	APIV2010AccountConferenceParticipant *shared.APIV2010AccountConferenceParticipant
}
