package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceConfigurationServerList = []string{
	"https://conversations.twilio.com",
}

type FetchServiceConfigurationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type FetchServiceConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceConfigurationRequest struct {
	ServerURL  *string
	PathParams FetchServiceConfigurationPathParams
	Security   FetchServiceConfigurationSecurity
}

type FetchServiceConfigurationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ConversationsV1ServiceServiceConfiguration *shared.ConversationsV1ServiceServiceConfiguration
}
