package operations

import (
	"openapi/pkg/models/shared"
)

var CreateInteractionChannelParticipantServers = []string{
	"https://flex-api.twilio.com",
}

type CreateInteractionChannelParticipantPathParams struct {
	ChannelSid     string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
}

type CreateInteractionChannelParticipantRequestBodyCreateInteractionChannelParticipantRequest struct {
	MediaProperties interface{}                                      `form:"name=MediaProperties"`
	Type            shared.InteractionChannelParticipantEnumTypeEnum `form:"name=Type"`
}

type CreateInteractionChannelParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateInteractionChannelParticipantRequest struct {
	ServerURL  *string
	PathParams CreateInteractionChannelParticipantPathParams
	Request    *CreateInteractionChannelParticipantRequestBodyCreateInteractionChannelParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateInteractionChannelParticipantSecurity
}

type CreateInteractionChannelParticipantResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	FlexV1InteractionInteractionChannelInteractionChannelParticipant *shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant
}
