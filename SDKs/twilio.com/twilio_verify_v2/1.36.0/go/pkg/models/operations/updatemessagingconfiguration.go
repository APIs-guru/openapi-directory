package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMessagingConfigurationServers = []string{
	"https://verify.twilio.com",
}

type UpdateMessagingConfigurationPathParams struct {
	Country    string `pathParam:"style=simple,explode=false,name=Country"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateMessagingConfigurationRequestBodyUpdateMessagingConfigurationRequest struct {
	MessagingServiceSid string `form:"name=MessagingServiceSid"`
}

type UpdateMessagingConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMessagingConfigurationRequest struct {
	ServerURL  *string
	PathParams UpdateMessagingConfigurationPathParams
	Request    *UpdateMessagingConfigurationRequestBodyUpdateMessagingConfigurationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMessagingConfigurationSecurity
}

type UpdateMessagingConfigurationResponse struct {
	ContentType                           string
	StatusCode                            int64
	VerifyV2ServiceMessagingConfiguration *shared.VerifyV2ServiceMessagingConfiguration
}
