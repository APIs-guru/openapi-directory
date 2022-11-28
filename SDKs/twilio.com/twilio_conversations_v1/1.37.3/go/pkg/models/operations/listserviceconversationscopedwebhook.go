package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceConversationScopedWebhookServerList = []string{
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

type ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse struct {
	Meta     *ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta `json:"meta,omitempty"`
	Webhooks []shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook    `json:"webhooks,omitempty"`
}

type ListServiceConversationScopedWebhookRequest struct {
	ServerURL   *string
	PathParams  ListServiceConversationScopedWebhookPathParams
	QueryParams ListServiceConversationScopedWebhookQueryParams
	Security    ListServiceConversationScopedWebhookSecurity
}

type ListServiceConversationScopedWebhookResponse struct {
	ContentType                                  string
	ListServiceConversationScopedWebhookResponse *ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse
	StatusCode                                   int64
}
