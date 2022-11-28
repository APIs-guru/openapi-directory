package operations

import (
	"openapi/pkg/models/shared"
)

var FetchChallengeServerList = []string{
	"https://verify.twilio.com",
}

type FetchChallengePathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchChallengeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchChallengeRequest struct {
	ServerURL  *string
	PathParams FetchChallengePathParams
	Security   FetchChallengeSecurity
}

type FetchChallengeResponse struct {
	ContentType                    string
	StatusCode                     int64
	VerifyV2ServiceEntityChallenge *shared.VerifyV2ServiceEntityChallenge
}
