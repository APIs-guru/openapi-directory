package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFleetServers = []string{
	"https://supersim.twilio.com",
}

type CreateFleetRequestBodyIPCommandsMethodEnum string

const (
	CreateFleetRequestBodyIPCommandsMethodEnumHead   CreateFleetRequestBodyIPCommandsMethodEnum = "HEAD"
	CreateFleetRequestBodyIPCommandsMethodEnumGet    CreateFleetRequestBodyIPCommandsMethodEnum = "GET"
	CreateFleetRequestBodyIPCommandsMethodEnumPost   CreateFleetRequestBodyIPCommandsMethodEnum = "POST"
	CreateFleetRequestBodyIPCommandsMethodEnumPatch  CreateFleetRequestBodyIPCommandsMethodEnum = "PATCH"
	CreateFleetRequestBodyIPCommandsMethodEnumPut    CreateFleetRequestBodyIPCommandsMethodEnum = "PUT"
	CreateFleetRequestBodyIPCommandsMethodEnumDelete CreateFleetRequestBodyIPCommandsMethodEnum = "DELETE"
)

type CreateFleetRequestBodySmsCommandsMethodEnum string

const (
	CreateFleetRequestBodySmsCommandsMethodEnumHead   CreateFleetRequestBodySmsCommandsMethodEnum = "HEAD"
	CreateFleetRequestBodySmsCommandsMethodEnumGet    CreateFleetRequestBodySmsCommandsMethodEnum = "GET"
	CreateFleetRequestBodySmsCommandsMethodEnumPost   CreateFleetRequestBodySmsCommandsMethodEnum = "POST"
	CreateFleetRequestBodySmsCommandsMethodEnumPatch  CreateFleetRequestBodySmsCommandsMethodEnum = "PATCH"
	CreateFleetRequestBodySmsCommandsMethodEnumPut    CreateFleetRequestBodySmsCommandsMethodEnum = "PUT"
	CreateFleetRequestBodySmsCommandsMethodEnumDelete CreateFleetRequestBodySmsCommandsMethodEnum = "DELETE"
)

type CreateFleetRequestBodyCreateFleetRequest struct {
	DataEnabled          *bool                                        `form:"name=DataEnabled"`
	DataLimit            *int64                                       `form:"name=DataLimit"`
	IPCommandsMethod     *CreateFleetRequestBodyIPCommandsMethodEnum  `form:"name=IpCommandsMethod"`
	IPCommandsURL        *string                                      `form:"name=IpCommandsUrl"`
	NetworkAccessProfile string                                       `form:"name=NetworkAccessProfile"`
	SmsCommandsEnabled   *bool                                        `form:"name=SmsCommandsEnabled"`
	SmsCommandsMethod    *CreateFleetRequestBodySmsCommandsMethodEnum `form:"name=SmsCommandsMethod"`
	SmsCommandsURL       *string                                      `form:"name=SmsCommandsUrl"`
	UniqueName           *string                                      `form:"name=UniqueName"`
}

type CreateFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateFleetRequest struct {
	ServerURL *string
	Request   *CreateFleetRequestBodyCreateFleetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateFleetSecurity
}

type CreateFleetResponse struct {
	ContentType     string
	StatusCode      int64
	SupersimV1Fleet *shared.SupersimV1Fleet
}
