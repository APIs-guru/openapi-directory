package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceWebhookConfigurationServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceWebhookConfigurationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type FetchServiceWebhookConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceWebhookConfigurationRequest struct {
	ServerURL  *string
	PathParams FetchServiceWebhookConfigurationPathParams
	Security   FetchServiceWebhookConfigurationSecurity
}

type FetchServiceWebhookConfigurationResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration *shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration
}
