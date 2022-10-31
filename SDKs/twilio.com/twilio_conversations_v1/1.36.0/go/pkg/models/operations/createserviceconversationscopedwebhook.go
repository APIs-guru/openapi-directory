package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceConversationScopedWebhookServers = []string{
	"https://conversations.twilio.com",
}

type CreateServiceConversationScopedWebhookPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest struct {
	ConfigurationFilters     []string                                               `form:"name=Configuration.Filters"`
	ConfigurationFlowSid     *string                                                `form:"name=Configuration.FlowSid"`
	ConfigurationMethod      *shared.ServiceConversationScopedWebhookEnumMethodEnum `form:"name=Configuration.Method"`
	ConfigurationReplayAfter *int64                                                 `form:"name=Configuration.ReplayAfter"`
	ConfigurationTriggers    []string                                               `form:"name=Configuration.Triggers"`
	ConfigurationURL         *string                                                `form:"name=Configuration.Url"`
	Target                   shared.ServiceConversationScopedWebhookEnumTargetEnum  `form:"name=Target"`
}

type CreateServiceConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceConversationScopedWebhookRequest struct {
	ServerURL  *string
	PathParams CreateServiceConversationScopedWebhookPathParams
	Request    *CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateServiceConversationScopedWebhookSecurity
}

type CreateServiceConversationScopedWebhookResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook *shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook
}
