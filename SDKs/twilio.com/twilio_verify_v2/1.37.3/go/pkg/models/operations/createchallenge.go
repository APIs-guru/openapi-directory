package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateChallengeServerList = []string{
	"https://verify.twilio.com",
}

type CreateChallengePathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateChallengeCreateChallengeRequest struct {
	AuthPayload    *string       `form:"name=AuthPayload"`
	DetailsFields  []interface{} `form:"name=Details.Fields"`
	DetailsMessage *string       `form:"name=Details.Message"`
	ExpirationDate *time.Time    `form:"name=ExpirationDate"`
	FactorSid      string        `form:"name=FactorSid"`
	HiddenDetails  *interface{}  `form:"name=HiddenDetails"`
}

type CreateChallengeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateChallengeRequest struct {
	ServerURL  *string
	PathParams CreateChallengePathParams
	Request    *CreateChallengeCreateChallengeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateChallengeSecurity
}

type CreateChallengeResponse struct {
	ContentType                    string
	StatusCode                     int64
	VerifyV2ServiceEntityChallenge *shared.VerifyV2ServiceEntityChallenge
}
