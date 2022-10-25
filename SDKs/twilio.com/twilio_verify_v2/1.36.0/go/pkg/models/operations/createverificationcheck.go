package operations

import (
	"openapi/pkg/models/shared"
)

var CreateVerificationCheckServers = []string{
	"https://verify.twilio.com",
}

type CreateVerificationCheckPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateVerificationCheckCreateVerificationCheckRequest struct {
	Amount          *string `form:"name=Amount"`
	Code            *string `form:"name=Code"`
	Payee           *string `form:"name=Payee"`
	To              *string `form:"name=To"`
	VerificationSid *string `form:"name=VerificationSid"`
}

type CreateVerificationCheckSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateVerificationCheckRequest struct {
	ServerURL  *string
	PathParams CreateVerificationCheckPathParams
	Request    *CreateVerificationCheckCreateVerificationCheckRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateVerificationCheckSecurity
}

type CreateVerificationCheckResponse struct {
	ContentType                      string
	StatusCode                       int64
	VerifyV2ServiceVerificationCheck *shared.VerifyV2ServiceVerificationCheck
}
