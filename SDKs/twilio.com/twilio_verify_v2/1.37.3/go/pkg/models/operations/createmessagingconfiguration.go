package operations

import (
	"openapi/pkg/models/shared"
)

var CreateMessagingConfigurationServerList = []string{
	"https://verify.twilio.com",
}

type CreateMessagingConfigurationPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateMessagingConfigurationCreateMessagingConfigurationRequest struct {
	Country             string `form:"name=Country"`
	MessagingServiceSid string `form:"name=MessagingServiceSid"`
}

type CreateMessagingConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMessagingConfigurationRequest struct {
	ServerURL  *string
	PathParams CreateMessagingConfigurationPathParams
	Request    *CreateMessagingConfigurationCreateMessagingConfigurationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateMessagingConfigurationSecurity
}

type CreateMessagingConfigurationResponse struct {
	ContentType                           string
	StatusCode                            int64
	VerifyV2ServiceMessagingConfiguration *shared.VerifyV2ServiceMessagingConfiguration
}
