package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIPCommandServers = []string{
	"https://supersim.twilio.com",
}

type CreateIPCommandRequestBodyCallbackMethodEnum string

const (
	CreateIPCommandRequestBodyCallbackMethodEnumHead   CreateIPCommandRequestBodyCallbackMethodEnum = "HEAD"
	CreateIPCommandRequestBodyCallbackMethodEnumGet    CreateIPCommandRequestBodyCallbackMethodEnum = "GET"
	CreateIPCommandRequestBodyCallbackMethodEnumPost   CreateIPCommandRequestBodyCallbackMethodEnum = "POST"
	CreateIPCommandRequestBodyCallbackMethodEnumPatch  CreateIPCommandRequestBodyCallbackMethodEnum = "PATCH"
	CreateIPCommandRequestBodyCallbackMethodEnumPut    CreateIPCommandRequestBodyCallbackMethodEnum = "PUT"
	CreateIPCommandRequestBodyCallbackMethodEnumDelete CreateIPCommandRequestBodyCallbackMethodEnum = "DELETE"
)

type CreateIPCommandRequestBodyCreateIPCommandRequest struct {
	CallbackMethod *CreateIPCommandRequestBodyCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL    *string                                       `form:"name=CallbackUrl"`
	DevicePort     int64                                         `form:"name=DevicePort"`
	Payload        string                                        `form:"name=Payload"`
	PayloadType    *shared.IPCommandEnumPayloadTypeEnum          `form:"name=PayloadType"`
	Sim            string                                        `form:"name=Sim"`
}

type CreateIPCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIPCommandRequest struct {
	ServerURL *string
	Request   *CreateIPCommandRequestBodyCreateIPCommandRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateIPCommandSecurity
}

type CreateIPCommandResponse struct {
	ContentType         string
	StatusCode          int64
	SupersimV1IPCommand *shared.SupersimV1IPCommand
}
