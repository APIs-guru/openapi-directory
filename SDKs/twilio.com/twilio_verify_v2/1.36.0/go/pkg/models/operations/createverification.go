package operations

import (
	"openapi/pkg/models/shared"
)

var CreateVerificationServers = []string{
	"https://verify.twilio.com",
}

type CreateVerificationPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateVerificationRequestBodyCreateVerificationRequest struct {
	Amount                      *string      `form:"name=Amount"`
	AppHash                     *string      `form:"name=AppHash"`
	Channel                     string       `form:"name=Channel"`
	ChannelConfiguration        *interface{} `form:"name=ChannelConfiguration"`
	CustomCode                  *string      `form:"name=CustomCode"`
	CustomFriendlyName          *string      `form:"name=CustomFriendlyName"`
	CustomMessage               *string      `form:"name=CustomMessage"`
	Locale                      *string      `form:"name=Locale"`
	Payee                       *string      `form:"name=Payee"`
	RateLimits                  *interface{} `form:"name=RateLimits"`
	SendDigits                  *string      `form:"name=SendDigits"`
	TemplateCustomSubstitutions *string      `form:"name=TemplateCustomSubstitutions"`
	TemplateSid                 *string      `form:"name=TemplateSid"`
	To                          string       `form:"name=To"`
}

type CreateVerificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateVerificationRequest struct {
	ServerURL  *string
	PathParams CreateVerificationPathParams
	Request    *CreateVerificationRequestBodyCreateVerificationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateVerificationSecurity
}

type CreateVerificationResponse struct {
	ContentType                 string
	StatusCode                  int64
	VerifyV2ServiceVerification *shared.VerifyV2ServiceVerification
}
