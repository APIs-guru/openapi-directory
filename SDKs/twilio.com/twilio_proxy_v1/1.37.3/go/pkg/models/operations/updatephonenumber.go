package operations

import (
	"openapi/pkg/models/shared"
)

var UpdatePhoneNumberServerList = []string{
	"https://proxy.twilio.com",
}

type UpdatePhoneNumberPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdatePhoneNumberUpdatePhoneNumberRequest struct {
	IsReserved *bool `form:"name=IsReserved"`
}

type UpdatePhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdatePhoneNumberRequest struct {
	ServerURL  *string
	PathParams UpdatePhoneNumberPathParams
	Request    *UpdatePhoneNumberUpdatePhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdatePhoneNumberSecurity
}

type UpdatePhoneNumberResponse struct {
	ContentType               string
	StatusCode                int64
	ProxyV1ServicePhoneNumber *shared.ProxyV1ServicePhoneNumber
}
