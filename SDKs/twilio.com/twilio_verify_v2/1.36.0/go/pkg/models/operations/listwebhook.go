package operations

import (
	"openapi/pkg/models/shared"
)

var ListWebhookServers = []string{
	"https://verify.twilio.com",
}

type ListWebhookPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListWebhookQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWebhookRequest struct {
	ServerURL   *string
	PathParams  ListWebhookPathParams
	QueryParams ListWebhookQueryParams
	Security    ListWebhookSecurity
}

type ListWebhookListWebhookResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListWebhookListWebhookResponse struct {
	Meta     *ListWebhookListWebhookResponseMeta `json:"meta,omitempty"`
	Webhooks []shared.VerifyV2ServiceWebhook     `json:"webhooks,omitempty"`
}

type ListWebhookResponse struct {
	ContentType         string
	ListWebhookResponse *ListWebhookListWebhookResponse
	StatusCode          int64
}
