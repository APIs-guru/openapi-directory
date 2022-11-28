package operations

import (
	"openapi/pkg/models/shared"
)

var FetchVerificationAttemptServerList = []string{
	"https://verify.twilio.com",
}

type FetchVerificationAttemptPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchVerificationAttemptSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchVerificationAttemptRequest struct {
	ServerURL  *string
	PathParams FetchVerificationAttemptPathParams
	Security   FetchVerificationAttemptSecurity
}

type FetchVerificationAttemptResponse struct {
	ContentType                 string
	StatusCode                  int64
	VerifyV2VerificationAttempt *shared.VerifyV2VerificationAttempt
}
