package operations

import (
	"openapi/pkg/models/shared"
)

var CreateNotificationServers = []string{
	"https://verify.twilio.com",
}

type CreateNotificationPathParams struct {
	ChallengeSid string `pathParam:"style=simple,explode=false,name=ChallengeSid"`
	Identity     string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid   string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateNotificationCreateNotificationRequest struct {
	TTL *int64 `form:"name=Ttl"`
}

type CreateNotificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateNotificationRequest struct {
	ServerURL  *string
	PathParams CreateNotificationPathParams
	Request    *CreateNotificationCreateNotificationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateNotificationSecurity
}

type CreateNotificationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	VerifyV2ServiceEntityChallengeNotification *shared.VerifyV2ServiceEntityChallengeNotification
}
