package operations

import (
	"openapi/pkg/models/shared"
)

var FetchPhoneNumberServerList = []string{
	"https://proxy.twilio.com",
}

type FetchPhoneNumberPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchPhoneNumberRequest struct {
	ServerURL  *string
	PathParams FetchPhoneNumberPathParams
	Security   FetchPhoneNumberSecurity
}

type FetchPhoneNumberResponse struct {
	ContentType               string
	StatusCode                int64
	ProxyV1ServicePhoneNumber *shared.ProxyV1ServicePhoneNumber
}
