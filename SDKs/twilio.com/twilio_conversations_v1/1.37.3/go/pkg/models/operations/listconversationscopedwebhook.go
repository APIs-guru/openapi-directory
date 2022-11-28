package operations

import (
	"openapi/pkg/models/shared"
)

var ListConversationScopedWebhookServerList = []string{
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

type ListConversationScopedWebhookListConversationScopedWebhookResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConversationScopedWebhookListConversationScopedWebhookResponse struct {
	Meta     *ListConversationScopedWebhookListConversationScopedWebhookResponseMeta `json:"meta,omitempty"`
	Webhooks []shared.ConversationsV1ConversationConversationScopedWebhook           `json:"webhooks,omitempty"`
}

type ListConversationScopedWebhookRequest struct {
	ServerURL   *string
	PathParams  ListConversationScopedWebhookPathParams
	QueryParams ListConversationScopedWebhookQueryParams
	Security    ListConversationScopedWebhookSecurity
}

type ListConversationScopedWebhookResponse struct {
	ContentType                           string
	ListConversationScopedWebhookResponse *ListConversationScopedWebhookListConversationScopedWebhookResponse
	StatusCode                            int64
}
