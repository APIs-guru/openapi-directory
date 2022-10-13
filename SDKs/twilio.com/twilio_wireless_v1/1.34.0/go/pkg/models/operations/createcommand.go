package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCommandServers = []string{
	"https://wireless.twilio.com",
}

type CreateCommandRequestBodyCallbackMethodEnum string

const (
	CreateCommandRequestBodyCallbackMethodEnumHead   CreateCommandRequestBodyCallbackMethodEnum = "HEAD"
	CreateCommandRequestBodyCallbackMethodEnumGet    CreateCommandRequestBodyCallbackMethodEnum = "GET"
	CreateCommandRequestBodyCallbackMethodEnumPost   CreateCommandRequestBodyCallbackMethodEnum = "POST"
	CreateCommandRequestBodyCallbackMethodEnumPatch  CreateCommandRequestBodyCallbackMethodEnum = "PATCH"
	CreateCommandRequestBodyCallbackMethodEnumPut    CreateCommandRequestBodyCallbackMethodEnum = "PUT"
	CreateCommandRequestBodyCallbackMethodEnumDelete CreateCommandRequestBodyCallbackMethodEnum = "DELETE"
)

type CreateCommandRequestBodyCreateCommandRequest struct {
	CallbackMethod           *CreateCommandRequestBodyCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL              *string                                     `form:"name=CallbackUrl"`
	Command                  string                                      `form:"name=Command"`
	CommandMode              *shared.CommandEnumCommandModeEnum          `form:"name=CommandMode"`
	DeliveryReceiptRequested *bool                                       `form:"name=DeliveryReceiptRequested"`
	IncludeSid               *string                                     `form:"name=IncludeSid"`
	Sim                      *string                                     `form:"name=Sim"`
}

type CreateCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCommandRequest struct {
	ServerURL *string
	Request   *CreateCommandRequestBodyCreateCommandRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCommandSecurity
}

type CreateCommandResponse struct {
	ContentType       string
	StatusCode        int64
	WirelessV1Command *shared.WirelessV1Command
}
