package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateInteractionChannelServers = []string{
	"https://flex-api.twilio.com",
}

type UpdateInteractionChannelPathParams struct {
	InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateInteractionChannelUpdateInteractionChannelRequest struct {
	Routing *interface{}                            `form:"name=Routing"`
	Status  shared.InteractionChannelEnumStatusEnum `form:"name=Status"`
}

type UpdateInteractionChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateInteractionChannelRequest struct {
	ServerURL  *string
	PathParams UpdateInteractionChannelPathParams
	Request    *UpdateInteractionChannelUpdateInteractionChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateInteractionChannelSecurity
}

type UpdateInteractionChannelResponse struct {
	ContentType                         string
	StatusCode                          int64
	FlexV1InteractionInteractionChannel *shared.FlexV1InteractionInteractionChannel
}
