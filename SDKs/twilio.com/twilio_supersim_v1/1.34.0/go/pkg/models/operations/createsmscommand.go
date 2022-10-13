package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSmsCommandServers = []string{
	"https://supersim.twilio.com",
}

type CreateSmsCommandRequestBodyCallbackMethodEnum string

const (
	CreateSmsCommandRequestBodyCallbackMethodEnumHead   CreateSmsCommandRequestBodyCallbackMethodEnum = "HEAD"
	CreateSmsCommandRequestBodyCallbackMethodEnumGet    CreateSmsCommandRequestBodyCallbackMethodEnum = "GET"
	CreateSmsCommandRequestBodyCallbackMethodEnumPost   CreateSmsCommandRequestBodyCallbackMethodEnum = "POST"
	CreateSmsCommandRequestBodyCallbackMethodEnumPatch  CreateSmsCommandRequestBodyCallbackMethodEnum = "PATCH"
	CreateSmsCommandRequestBodyCallbackMethodEnumPut    CreateSmsCommandRequestBodyCallbackMethodEnum = "PUT"
	CreateSmsCommandRequestBodyCallbackMethodEnumDelete CreateSmsCommandRequestBodyCallbackMethodEnum = "DELETE"
)

type CreateSmsCommandRequestBodyCreateSmsCommandRequest struct {
	CallbackMethod *CreateSmsCommandRequestBodyCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL    *string                                        `form:"name=CallbackUrl"`
	Payload        string                                         `form:"name=Payload"`
	Sim            string                                         `form:"name=Sim"`
}

type CreateSmsCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSmsCommandRequest struct {
	ServerURL *string
	Request   *CreateSmsCommandRequestBodyCreateSmsCommandRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateSmsCommandSecurity
}

type CreateSmsCommandResponse struct {
	ContentType          string
	StatusCode           int64
	SupersimV1SmsCommand *shared.SupersimV1SmsCommand
}
