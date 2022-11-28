package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteOriginationURLServerList = []string{
	"https://trunking.twilio.com",
}

type DeleteOriginationURLPathParams struct {
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type DeleteOriginationURLSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteOriginationURLRequest struct {
	ServerURL  *string
	PathParams DeleteOriginationURLPathParams
	Security   DeleteOriginationURLSecurity
}

type DeleteOriginationURLResponse struct {
	ContentType string
	StatusCode  int64
}
