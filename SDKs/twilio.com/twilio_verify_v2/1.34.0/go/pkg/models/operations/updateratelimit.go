package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRateLimitServers = []string{
	"https://verify.twilio.com",
}

type UpdateRateLimitPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateRateLimitRequestBodyUpdateRateLimitRequest struct {
	Description *string `form:"name=Description"`
}

type UpdateRateLimitSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRateLimitRequest struct {
	ServerURL  *string
	PathParams UpdateRateLimitPathParams
	Request    *UpdateRateLimitRequestBodyUpdateRateLimitRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateRateLimitSecurity
}

type UpdateRateLimitResponse struct {
	ContentType              string
	StatusCode               int64
	VerifyV2ServiceRateLimit *shared.VerifyV2ServiceRateLimit
}
