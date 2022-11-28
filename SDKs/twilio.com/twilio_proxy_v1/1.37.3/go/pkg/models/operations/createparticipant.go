package operations

import (
	"openapi/pkg/models/shared"
)

var CreateParticipantServerList = []string{
	"https://proxy.twilio.com",
}

type CreateParticipantPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	SessionSid string `pathParam:"style=simple,explode=false,name=SessionSid"`
}

type CreateParticipantCreateParticipantRequest struct {
	FriendlyName       *string `form:"name=FriendlyName"`
	Identifier         string  `form:"name=Identifier"`
	ProxyIdentifier    *string `form:"name=ProxyIdentifier"`
	ProxyIdentifierSid *string `form:"name=ProxyIdentifierSid"`
}

type CreateParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateParticipantRequest struct {
	ServerURL  *string
	PathParams CreateParticipantPathParams
	Request    *CreateParticipantCreateParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateParticipantSecurity
}

type CreateParticipantResponse struct {
	ContentType                      string
	StatusCode                       int64
	ProxyV1ServiceSessionParticipant *shared.ProxyV1ServiceSessionParticipant
}
