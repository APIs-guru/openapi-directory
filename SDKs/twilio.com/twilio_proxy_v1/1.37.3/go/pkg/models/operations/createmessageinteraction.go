package operations

import (
	"openapi/pkg/models/shared"
)

var CreateMessageInteractionServerList = []string{
	"https://proxy.twilio.com",
}

type CreateMessageInteractionPathParams struct {
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	SessionSid     string `pathParam:"style=simple,explode=false,name=SessionSid"`
}

type CreateMessageInteractionCreateMessageInteractionRequest struct {
	Body     *string  `form:"name=Body"`
	MediaURL []string `form:"name=MediaUrl"`
}

type CreateMessageInteractionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMessageInteractionRequest struct {
	ServerURL  *string
	PathParams CreateMessageInteractionPathParams
	Request    *CreateMessageInteractionCreateMessageInteractionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateMessageInteractionSecurity
}

type CreateMessageInteractionResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ProxyV1ServiceSessionParticipantMessageInteraction *shared.ProxyV1ServiceSessionParticipantMessageInteraction
}
