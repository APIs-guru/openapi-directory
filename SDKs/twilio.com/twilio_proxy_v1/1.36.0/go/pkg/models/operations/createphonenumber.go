package operations

import (
	"openapi/pkg/models/shared"
)

var CreatePhoneNumberServers = []string{
	"https://proxy.twilio.com",
}

type CreatePhoneNumberPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreatePhoneNumberCreatePhoneNumberRequest struct {
	IsReserved  *bool   `form:"name=IsReserved"`
	PhoneNumber *string `form:"name=PhoneNumber"`
	Sid         *string `form:"name=Sid"`
}

type CreatePhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreatePhoneNumberRequest struct {
	ServerURL  *string
	PathParams CreatePhoneNumberPathParams
	Request    *CreatePhoneNumberCreatePhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreatePhoneNumberSecurity
}

type CreatePhoneNumberResponse struct {
	ContentType               string
	StatusCode                int64
	ProxyV1ServicePhoneNumber *shared.ProxyV1ServicePhoneNumber
}
