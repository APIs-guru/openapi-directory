package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceConfigurationServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceConfigurationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type UpdateServiceConfigurationRequestBodyUpdateServiceConfigurationRequest struct {
	DefaultChatServiceRoleSid         *string `form:"name=DefaultChatServiceRoleSid"`
	DefaultConversationCreatorRoleSid *string `form:"name=DefaultConversationCreatorRoleSid"`
	DefaultConversationRoleSid        *string `form:"name=DefaultConversationRoleSid"`
	ReachabilityEnabled               *bool   `form:"name=ReachabilityEnabled"`
}

type UpdateServiceConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceConfigurationRequest struct {
	ServerURL  *string
	PathParams UpdateServiceConfigurationPathParams
	Request    *UpdateServiceConfigurationRequestBodyUpdateServiceConfigurationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceConfigurationSecurity
}

type UpdateServiceConfigurationResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ConversationsV1ServiceServiceConfiguration *shared.ConversationsV1ServiceServiceConfiguration
}
