package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteRateLimitServers = []string{
	"https://verify.twilio.com",
}

type DeleteRateLimitPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteRateLimitSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteRateLimitRequest struct {
	ServerURL  *string
	PathParams DeleteRateLimitPathParams
	Security   DeleteRateLimitSecurity
}

type DeleteRateLimitResponse struct {
	ContentType string
	StatusCode  int64
}
