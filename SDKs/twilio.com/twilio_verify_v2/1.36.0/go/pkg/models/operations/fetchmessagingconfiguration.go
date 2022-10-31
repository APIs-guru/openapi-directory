package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMessagingConfigurationServers = []string{
	"https://verify.twilio.com",
}

type FetchMessagingConfigurationPathParams struct {
	Country    string `pathParam:"style=simple,explode=false,name=Country"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchMessagingConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMessagingConfigurationRequest struct {
	ServerURL  *string
	PathParams FetchMessagingConfigurationPathParams
	Security   FetchMessagingConfigurationSecurity
}

type FetchMessagingConfigurationResponse struct {
	ContentType                           string
	StatusCode                            int64
	VerifyV2ServiceMessagingConfiguration *shared.VerifyV2ServiceMessagingConfiguration
}
