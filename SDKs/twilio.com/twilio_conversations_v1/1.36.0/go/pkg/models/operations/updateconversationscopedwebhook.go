package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConversationScopedWebhookServers = []string{
	"https://conversations.twilio.com",
}

type UpdateConversationScopedWebhookPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest struct {
	ConfigurationFilters  []string                                        `form:"name=Configuration.Filters"`
	ConfigurationFlowSid  *string                                         `form:"name=Configuration.FlowSid"`
	ConfigurationMethod   *shared.ConversationScopedWebhookEnumMethodEnum `form:"name=Configuration.Method"`
	ConfigurationTriggers []string                                        `form:"name=Configuration.Triggers"`
	ConfigurationURL      *string                                         `form:"name=Configuration.Url"`
}

type UpdateConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConversationScopedWebhookRequest struct {
	ServerURL  *string
	PathParams UpdateConversationScopedWebhookPathParams
	Request    *UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConversationScopedWebhookSecurity
}

type UpdateConversationScopedWebhookResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ConversationsV1ConversationConversationScopedWebhook *shared.ConversationsV1ConversationConversationScopedWebhook
}
