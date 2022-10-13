package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceConversationScopedWebhookServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceConversationScopedWebhookPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type ListServiceConversationScopedWebhookQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceConversationScopedWebhookRequest struct {
	ServerURL   *string
	PathParams  ListServiceConversationScopedWebhookPathParams
	QueryParams ListServiceConversationScopedWebhookQueryParams
	Security    ListServiceConversationScopedWebhookSecurity
}

type ListServiceConversationScopedWebhook200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceConversationScopedWebhook200ApplicationJSONListServiceConversationScopedWebhookResponse struct {
	Meta     *ListServiceConversationScopedWebhook200ApplicationJSONMeta                        `json:"meta"`
	Webhooks []shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook `json:"webhooks"`
}

type ListServiceConversationScopedWebhookResponse struct {
	ContentType                                  string
	ListServiceConversationScopedWebhookResponse *ListServiceConversationScopedWebhook200ApplicationJSONListServiceConversationScopedWebhookResponse
	StatusCode                                   int64
}
