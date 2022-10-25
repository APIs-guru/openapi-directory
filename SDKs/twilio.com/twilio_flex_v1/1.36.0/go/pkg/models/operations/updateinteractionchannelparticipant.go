package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateInteractionChannelParticipantServers = []string{
	"https://flex-api.twilio.com",
}

type UpdateInteractionChannelParticipantPathParams struct {
	ChannelSid     string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest struct {
	Status shared.InteractionChannelParticipantEnumStatusEnum `form:"name=Status"`
}

type UpdateInteractionChannelParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateInteractionChannelParticipantRequest struct {
	ServerURL  *string
	PathParams UpdateInteractionChannelParticipantPathParams
	Request    *UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateInteractionChannelParticipantSecurity
}

type UpdateInteractionChannelParticipantResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	FlexV1InteractionInteractionChannelInteractionChannelParticipant *shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant
}
