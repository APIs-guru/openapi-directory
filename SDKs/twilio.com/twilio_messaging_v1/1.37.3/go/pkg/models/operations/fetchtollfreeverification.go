package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTollfreeVerificationServerList = []string{
	"https://messaging.twilio.com",
}

type FetchTollfreeVerificationPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchTollfreeVerificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTollfreeVerificationRequest struct {
	ServerURL  *string
	PathParams FetchTollfreeVerificationPathParams
	Security   FetchTollfreeVerificationSecurity
}

type FetchTollfreeVerificationResponse struct {
	ContentType                     string
	StatusCode                      int64
	MessagingV1TollfreeVerification *shared.MessagingV1TollfreeVerification
}
