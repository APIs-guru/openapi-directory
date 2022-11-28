package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFleetServerList = []string{
	"https://supersim.twilio.com",
}

type UpdateFleetPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateFleetUpdateFleetRequestIPCommandsMethodEnum string

const (
	UpdateFleetUpdateFleetRequestIPCommandsMethodEnumHead   UpdateFleetUpdateFleetRequestIPCommandsMethodEnum = "HEAD"
	UpdateFleetUpdateFleetRequestIPCommandsMethodEnumGet    UpdateFleetUpdateFleetRequestIPCommandsMethodEnum = "GET"
	UpdateFleetUpdateFleetRequestIPCommandsMethodEnumPost   UpdateFleetUpdateFleetRequestIPCommandsMethodEnum = "POST"
	UpdateFleetUpdateFleetRequestIPCommandsMethodEnumPatch  UpdateFleetUpdateFleetRequestIPCommandsMethodEnum = "PATCH"
	UpdateFleetUpdateFleetRequestIPCommandsMethodEnumPut    UpdateFleetUpdateFleetRequestIPCommandsMethodEnum = "PUT"
	UpdateFleetUpdateFleetRequestIPCommandsMethodEnumDelete UpdateFleetUpdateFleetRequestIPCommandsMethodEnum = "DELETE"
)

type UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum string

const (
	UpdateFleetUpdateFleetRequestSmsCommandsMethodEnumHead   UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = "HEAD"
	UpdateFleetUpdateFleetRequestSmsCommandsMethodEnumGet    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = "GET"
	UpdateFleetUpdateFleetRequestSmsCommandsMethodEnumPost   UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = "POST"
	UpdateFleetUpdateFleetRequestSmsCommandsMethodEnumPatch  UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = "PATCH"
	UpdateFleetUpdateFleetRequestSmsCommandsMethodEnumPut    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = "PUT"
	UpdateFleetUpdateFleetRequestSmsCommandsMethodEnumDelete UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = "DELETE"
)

type UpdateFleetUpdateFleetRequest struct {
	DataLimit            *int64                                              `form:"name=DataLimit"`
	IPCommandsMethod     *UpdateFleetUpdateFleetRequestIPCommandsMethodEnum  `form:"name=IpCommandsMethod"`
	IPCommandsURL        *string                                             `form:"name=IpCommandsUrl"`
	NetworkAccessProfile *string                                             `form:"name=NetworkAccessProfile"`
	SmsCommandsMethod    *UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum `form:"name=SmsCommandsMethod"`
	SmsCommandsURL       *string                                             `form:"name=SmsCommandsUrl"`
	UniqueName           *string                                             `form:"name=UniqueName"`
}

type UpdateFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateFleetRequest struct {
	ServerURL  *string
	PathParams UpdateFleetPathParams
	Request    *UpdateFleetUpdateFleetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateFleetSecurity
}

type UpdateFleetResponse struct {
	ContentType     string
	StatusCode      int64
	SupersimV1Fleet *shared.SupersimV1Fleet
}
