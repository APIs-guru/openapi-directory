package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationScopedWebhookServers = []string{
	"https://conversations.twilio.com",
}

type ListConversationScopedWebhookPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type ListConversationScopedWebhookQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConversationScopedWebhookRequest struct {
	ServerURL   *string
	PathParams  ListConversationScopedWebhookPathParams
	QueryParams ListConversationScopedWebhookQueryParams
	Security    ListConversationScopedWebhookSecurity
}

type ListConversationScopedWebhook200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConversationScopedWebhook200ApplicationJSONListConversationScopedWebhookResponse struct {
	Meta     *ListConversationScopedWebhook200ApplicationJSONMeta          `json:"meta"`
	Webhooks []shared.ConversationsV1ConversationConversationScopedWebhook `json:"webhooks"`
}

type ListConversationScopedWebhookResponse struct {
	ContentType                           string
	ListConversationScopedWebhookResponse *ListConversationScopedWebhook200ApplicationJSONListConversationScopedWebhookResponse
	StatusCode                            int64
}
