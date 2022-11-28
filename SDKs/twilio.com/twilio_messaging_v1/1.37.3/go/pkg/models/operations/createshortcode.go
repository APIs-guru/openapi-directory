package operations

import (
	"openapi/pkg/models/shared"
)

var CreateShortCodeServerList = []string{
	"https://messaging.twilio.com",
}

type CreateShortCodePathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateShortCodeCreateShortCodeRequest struct {
	ShortCodeSid string `form:"name=ShortCodeSid"`
}

type CreateShortCodeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateShortCodeRequest struct {
	ServerURL  *string
	PathParams CreateShortCodePathParams
	Request    *CreateShortCodeCreateShortCodeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateShortCodeSecurity
}

type CreateShortCodeResponse struct {
	ContentType                 string
	StatusCode                  int64
	MessagingV1ServiceShortCode *shared.MessagingV1ServiceShortCode
}
