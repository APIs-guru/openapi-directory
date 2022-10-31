package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateChallengeServers = []string{
	"https://verify.twilio.com",
}

type UpdateChallengePathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateChallengeUpdateChallengeRequest struct {
	AuthPayload *string      `form:"name=AuthPayload"`
	Metadata    *interface{} `form:"name=Metadata"`
}

type UpdateChallengeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateChallengeRequest struct {
	ServerURL  *string
	PathParams UpdateChallengePathParams
	Request    *UpdateChallengeUpdateChallengeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateChallengeSecurity
}

type UpdateChallengeResponse struct {
	ContentType                    string
	StatusCode                     int64
	VerifyV2ServiceEntityChallenge *shared.VerifyV2ServiceEntityChallenge
}
