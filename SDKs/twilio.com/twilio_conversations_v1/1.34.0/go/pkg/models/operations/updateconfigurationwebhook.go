package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConfigurationWebhookServers = []string{
	"https://conversations.twilio.com",
}

type UpdateConfigurationWebhookRequestBodyUpdateConfigurationWebhookRequest struct {
	Filters        []string                                   `form:"name=Filters"`
	Method         *string                                    `form:"name=Method"`
	PostWebhookURL *string                                    `form:"name=PostWebhookUrl"`
	PreWebhookURL  *string                                    `form:"name=PreWebhookUrl"`
	Target         *shared.ConfigurationWebhookEnumTargetEnum `form:"name=Target"`
}

type UpdateConfigurationWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConfigurationWebhookRequest struct {
	ServerURL *string
	Request   *UpdateConfigurationWebhookRequestBodyUpdateConfigurationWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  UpdateConfigurationWebhookSecurity
}

type UpdateConfigurationWebhookResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ConversationsV1ConfigurationConfigurationWebhook *shared.ConversationsV1ConfigurationConfigurationWebhook
}
