package operations

import (
	"openapi/pkg/models/shared"
)

var CreateWirelessCommandServers = []string{
	"https://preview.twilio.com",
}

type CreateWirelessCommandRequestBodyCreateWirelessCommandRequest struct {
	CallbackMethod *string `form:"name=CallbackMethod"`
	CallbackURL    *string `form:"name=CallbackUrl"`
	Command        string  `form:"name=Command"`
	CommandMode    *string `form:"name=CommandMode"`
	Device         *string `form:"name=Device"`
	IncludeSid     *string `form:"name=IncludeSid"`
	Sim            *string `form:"name=Sim"`
}

type CreateWirelessCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateWirelessCommandRequest struct {
	ServerURL *string
	Request   *CreateWirelessCommandRequestBodyCreateWirelessCommandRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateWirelessCommandSecurity
}

type CreateWirelessCommandResponse struct {
	ContentType            string
	StatusCode             int64
	PreviewWirelessCommand *shared.PreviewWirelessCommand
}
