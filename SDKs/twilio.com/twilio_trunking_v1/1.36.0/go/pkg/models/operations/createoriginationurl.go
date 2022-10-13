package operations

import (
	"openapi/pkg/models/shared"
)

var CreateOriginationURLServers = []string{
	"https://trunking.twilio.com",
}

type CreateOriginationURLPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type CreateOriginationURLRequestBodyCreateOriginationURLRequest struct {
	Enabled      bool   `form:"name=Enabled"`
	FriendlyName string `form:"name=FriendlyName"`
	Priority     int64  `form:"name=Priority"`
	SipURL       string `form:"name=SipUrl"`
	Weight       int64  `form:"name=Weight"`
}

type CreateOriginationURLSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateOriginationURLRequest struct {
	ServerURL  *string
	PathParams CreateOriginationURLPathParams
	Request    *CreateOriginationURLRequestBodyCreateOriginationURLRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateOriginationURLSecurity
}

type CreateOriginationURLResponse struct {
	ContentType                   string
	StatusCode                    int64
	TrunkingV1TrunkOriginationURL *shared.TrunkingV1TrunkOriginationURL
}
