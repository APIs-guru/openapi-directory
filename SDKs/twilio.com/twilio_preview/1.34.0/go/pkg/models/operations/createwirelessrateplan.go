package operations

import (
	"openapi/pkg/models/shared"
)

var CreateWirelessRatePlanServers = []string{
	"https://preview.twilio.com",
}

type CreateWirelessRatePlanRequestBodyCreateWirelessRatePlanRequest struct {
	CommandsEnabled        *bool    `form:"name=CommandsEnabled"`
	DataEnabled            *bool    `form:"name=DataEnabled"`
	DataLimit              *int64   `form:"name=DataLimit"`
	DataMetering           *string  `form:"name=DataMetering"`
	FriendlyName           *string  `form:"name=FriendlyName"`
	InternationalRoaming   []string `form:"name=InternationalRoaming"`
	MessagingEnabled       *bool    `form:"name=MessagingEnabled"`
	NationalRoamingEnabled *bool    `form:"name=NationalRoamingEnabled"`
	UniqueName             *string  `form:"name=UniqueName"`
	VoiceEnabled           *bool    `form:"name=VoiceEnabled"`
}

type CreateWirelessRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateWirelessRatePlanRequest struct {
	ServerURL *string
	Request   *CreateWirelessRatePlanRequestBodyCreateWirelessRatePlanRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateWirelessRatePlanSecurity
}

type CreateWirelessRatePlanResponse struct {
	ContentType             string
	StatusCode              int64
	PreviewWirelessRatePlan *shared.PreviewWirelessRatePlan
}
