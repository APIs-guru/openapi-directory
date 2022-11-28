package operations

import (
	"openapi/pkg/models/shared"
)

var CreateRateLimitServerList = []string{
	"https://verify.twilio.com",
}

type CreateRateLimitPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateRateLimitCreateRateLimitRequest struct {
	Description *string `form:"name=Description"`
	UniqueName  string  `form:"name=UniqueName"`
}

type CreateRateLimitSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateRateLimitRequest struct {
	ServerURL  *string
	PathParams CreateRateLimitPathParams
	Request    *CreateRateLimitCreateRateLimitRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateRateLimitSecurity
}

type CreateRateLimitResponse struct {
	ContentType              string
	StatusCode               int64
	VerifyV2ServiceRateLimit *shared.VerifyV2ServiceRateLimit
}
