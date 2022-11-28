package operations

import (
	"openapi/pkg/models/shared"
)

var FetchOriginationURLServerList = []string{
	"https://trunking.twilio.com",
}

type FetchOriginationURLPathParams struct {
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type FetchOriginationURLSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchOriginationURLRequest struct {
	ServerURL  *string
	PathParams FetchOriginationURLPathParams
	Security   FetchOriginationURLSecurity
}

type FetchOriginationURLResponse struct {
	ContentType                   string
	StatusCode                    int64
	TrunkingV1TrunkOriginationURL *shared.TrunkingV1TrunkOriginationURL
}
