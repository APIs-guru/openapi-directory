package operations

import (
	"openapi/pkg/models/shared"
)

var DeletePhoneNumberServerList = []string{
	"https://trunking.twilio.com",
}

type DeletePhoneNumberPathParams struct {
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type DeletePhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeletePhoneNumberRequest struct {
	ServerURL  *string
	PathParams DeletePhoneNumberPathParams
	Security   DeletePhoneNumberSecurity
}

type DeletePhoneNumberResponse struct {
	ContentType string
	StatusCode  int64
}
