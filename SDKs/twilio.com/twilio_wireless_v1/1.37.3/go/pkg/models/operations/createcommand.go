package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCommandServerList = []string{
	"https://wireless.twilio.com",
}

type CreateCommandCreateCommandRequestCallbackMethodEnum string

const (
	CreateCommandCreateCommandRequestCallbackMethodEnumHead   CreateCommandCreateCommandRequestCallbackMethodEnum = "HEAD"
	CreateCommandCreateCommandRequestCallbackMethodEnumGet    CreateCommandCreateCommandRequestCallbackMethodEnum = "GET"
	CreateCommandCreateCommandRequestCallbackMethodEnumPost   CreateCommandCreateCommandRequestCallbackMethodEnum = "POST"
	CreateCommandCreateCommandRequestCallbackMethodEnumPatch  CreateCommandCreateCommandRequestCallbackMethodEnum = "PATCH"
	CreateCommandCreateCommandRequestCallbackMethodEnumPut    CreateCommandCreateCommandRequestCallbackMethodEnum = "PUT"
	CreateCommandCreateCommandRequestCallbackMethodEnumDelete CreateCommandCreateCommandRequestCallbackMethodEnum = "DELETE"
)

type CreateCommandCreateCommandRequest struct {
	CallbackMethod           *CreateCommandCreateCommandRequestCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL              *string                                              `form:"name=CallbackUrl"`
	Command                  string                                               `form:"name=Command"`
	CommandMode              *shared.CommandEnumCommandModeEnum                   `form:"name=CommandMode"`
	DeliveryReceiptRequested *bool                                                `form:"name=DeliveryReceiptRequested"`
	IncludeSid               *string                                              `form:"name=IncludeSid"`
	Sim                      *string                                              `form:"name=Sim"`
}

type CreateCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCommandRequest struct {
	ServerURL *string
	Request   *CreateCommandCreateCommandRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCommandSecurity
}

type CreateCommandResponse struct {
	ContentType       string
	StatusCode        int64
	WirelessV1Command *shared.WirelessV1Command
}
