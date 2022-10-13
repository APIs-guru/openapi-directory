package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFleetServers = []string{
	"https://supersim.twilio.com",
}

type UpdateFleetPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateFleetRequestBodyIPCommandsMethodEnum string

const (
	UpdateFleetRequestBodyIPCommandsMethodEnumHead   UpdateFleetRequestBodyIPCommandsMethodEnum = "HEAD"
	UpdateFleetRequestBodyIPCommandsMethodEnumGet    UpdateFleetRequestBodyIPCommandsMethodEnum = "GET"
	UpdateFleetRequestBodyIPCommandsMethodEnumPost   UpdateFleetRequestBodyIPCommandsMethodEnum = "POST"
	UpdateFleetRequestBodyIPCommandsMethodEnumPatch  UpdateFleetRequestBodyIPCommandsMethodEnum = "PATCH"
	UpdateFleetRequestBodyIPCommandsMethodEnumPut    UpdateFleetRequestBodyIPCommandsMethodEnum = "PUT"
	UpdateFleetRequestBodyIPCommandsMethodEnumDelete UpdateFleetRequestBodyIPCommandsMethodEnum = "DELETE"
)

type UpdateFleetRequestBodySmsCommandsMethodEnum string

const (
	UpdateFleetRequestBodySmsCommandsMethodEnumHead   UpdateFleetRequestBodySmsCommandsMethodEnum = "HEAD"
	UpdateFleetRequestBodySmsCommandsMethodEnumGet    UpdateFleetRequestBodySmsCommandsMethodEnum = "GET"
	UpdateFleetRequestBodySmsCommandsMethodEnumPost   UpdateFleetRequestBodySmsCommandsMethodEnum = "POST"
	UpdateFleetRequestBodySmsCommandsMethodEnumPatch  UpdateFleetRequestBodySmsCommandsMethodEnum = "PATCH"
	UpdateFleetRequestBodySmsCommandsMethodEnumPut    UpdateFleetRequestBodySmsCommandsMethodEnum = "PUT"
	UpdateFleetRequestBodySmsCommandsMethodEnumDelete UpdateFleetRequestBodySmsCommandsMethodEnum = "DELETE"
)

type UpdateFleetRequestBodyUpdateFleetRequest struct {
	DataLimit            *int64                                       `form:"name=DataLimit"`
	IPCommandsMethod     *UpdateFleetRequestBodyIPCommandsMethodEnum  `form:"name=IpCommandsMethod"`
	IPCommandsURL        *string                                      `form:"name=IpCommandsUrl"`
	NetworkAccessProfile *string                                      `form:"name=NetworkAccessProfile"`
	SmsCommandsMethod    *UpdateFleetRequestBodySmsCommandsMethodEnum `form:"name=SmsCommandsMethod"`
	SmsCommandsURL       *string                                      `form:"name=SmsCommandsUrl"`
	UniqueName           *string                                      `form:"name=UniqueName"`
}

type UpdateFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateFleetRequest struct {
	ServerURL  *string
	PathParams UpdateFleetPathParams
	Request    *UpdateFleetRequestBodyUpdateFleetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateFleetSecurity
}

type UpdateFleetResponse struct {
	ContentType     string
	StatusCode      int64
	SupersimV1Fleet *shared.SupersimV1Fleet
}
