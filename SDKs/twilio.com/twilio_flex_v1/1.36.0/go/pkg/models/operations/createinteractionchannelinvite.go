package operations

import (
	"openapi/pkg/models/shared"
)

var CreateInteractionChannelInviteServers = []string{
	"https://flex-api.twilio.com",
}

type CreateInteractionChannelInvitePathParams struct {
	ChannelSid     string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
}

type CreateInteractionChannelInviteCreateInteractionChannelInviteRequest struct {
	Routing interface{} `form:"name=Routing"`
}

type CreateInteractionChannelInviteSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateInteractionChannelInviteRequest struct {
	ServerURL  *string
	PathParams CreateInteractionChannelInvitePathParams
	Request    *CreateInteractionChannelInviteCreateInteractionChannelInviteRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateInteractionChannelInviteSecurity
}

type CreateInteractionChannelInviteResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	FlexV1InteractionInteractionChannelInteractionChannelInvite *shared.FlexV1InteractionInteractionChannelInteractionChannelInvite
}
