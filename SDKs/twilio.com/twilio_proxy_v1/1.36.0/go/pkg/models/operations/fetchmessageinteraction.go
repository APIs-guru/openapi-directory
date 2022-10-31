package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMessageInteractionServers = []string{
	"https://proxy.twilio.com",
}

type FetchMessageInteractionPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	SessionSid     string `pathParam:"style=simple,explode=false,name=SessionSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMessageInteractionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMessageInteractionRequest struct {
	ServerURL  *string
	PathParams FetchMessageInteractionPathParams
	Security   FetchMessageInteractionSecurity
}

type FetchMessageInteractionResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ProxyV1ServiceSessionParticipantMessageInteraction *shared.ProxyV1ServiceSessionParticipantMessageInteraction
}
