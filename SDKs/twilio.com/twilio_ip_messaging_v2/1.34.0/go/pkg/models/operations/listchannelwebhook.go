package operations

import (
	"openapi/pkg/models/shared"
)

var ListChannelWebhookServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListChannelWebhookPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListChannelWebhookQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListChannelWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListChannelWebhookRequest struct {
	ServerURL   *string
	PathParams  ListChannelWebhookPathParams
	QueryParams ListChannelWebhookQueryParams
	Security    ListChannelWebhookSecurity
}

type ListChannelWebhook200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListChannelWebhook200ApplicationJSONListChannelWebhookResponse struct {
	Meta     *ListChannelWebhook200ApplicationJSONMeta          `json:"meta"`
	Webhooks []shared.IPMessagingV2ServiceChannelChannelWebhook `json:"webhooks"`
}

type ListChannelWebhookResponse struct {
	ContentType                string
	ListChannelWebhookResponse *ListChannelWebhook200ApplicationJSONListChannelWebhookResponse
	StatusCode                 int64
}
