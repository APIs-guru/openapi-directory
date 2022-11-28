package operations

import (
	"openapi/pkg/models/shared"
)

var FetchPhoneNumberServerList = []string{
	"https://trunking.twilio.com",
}

type FetchPhoneNumberPathParams struct {
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
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
	ContentType                string
	StatusCode                 int64
	TrunkingV1TrunkPhoneNumber *shared.TrunkingV1TrunkPhoneNumber
}
