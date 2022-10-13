package operations

import (
	"openapi/pkg/models/shared"
)

var ListWebhookServers = []string{
	"https://autopilot.twilio.com",
}

type ListWebhookPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
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

type ListWebhook200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWebhook200ApplicationJSONListWebhookResponse struct {
	Meta     *ListWebhook200ApplicationJSONMeta   `json:"meta"`
	Webhooks []shared.AutopilotV1AssistantWebhook `json:"webhooks"`
}

type ListWebhookResponse struct {
	ContentType         string
	ListWebhookResponse *ListWebhook200ApplicationJSONListWebhookResponse
	StatusCode          int64
}
