package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConfigurationServers = []string{
	"https://conversations.twilio.com",
}

type UpdateConfigurationUpdateConfigurationRequest struct {
	DefaultChatServiceSid      *string `form:"name=DefaultChatServiceSid"`
	DefaultClosedTimer         *string `form:"name=DefaultClosedTimer"`
	DefaultInactiveTimer       *string `form:"name=DefaultInactiveTimer"`
	DefaultMessagingServiceSid *string `form:"name=DefaultMessagingServiceSid"`
}

type UpdateConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConfigurationRequest struct {
	ServerURL *string
	Request   *UpdateConfigurationUpdateConfigurationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  UpdateConfigurationSecurity
}

type UpdateConfigurationResponse struct {
	ContentType                  string
	StatusCode                   int64
	ConversationsV1Configuration *shared.ConversationsV1Configuration
}
