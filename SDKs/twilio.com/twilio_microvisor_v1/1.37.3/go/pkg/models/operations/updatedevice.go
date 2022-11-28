package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDeviceServerList = []string{
	"https://microvisor.twilio.com",
}

type UpdateDevicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateDeviceUpdateDeviceRequest struct {
	LoggingEnabled *bool   `form:"name=LoggingEnabled"`
	TargetApp      *string `form:"name=TargetApp"`
	UniqueName     *string `form:"name=UniqueName"`
}

type UpdateDeviceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDeviceRequest struct {
	ServerURL  *string
	PathParams UpdateDevicePathParams
	Request    *UpdateDeviceUpdateDeviceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDeviceSecurity
}

type UpdateDeviceResponse struct {
	ContentType        string
	StatusCode         int64
	MicrovisorV1Device *shared.MicrovisorV1Device
}
