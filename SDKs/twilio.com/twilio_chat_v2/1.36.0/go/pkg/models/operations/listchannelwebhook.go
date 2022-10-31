package operations

import (
"openapi/pkg/models/shared")
var ListChannelWebhookServers = []string{
	"https://chat.twilio.com",
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
    ServerURL *string 
    PathParams ListChannelWebhookPathParams 
    QueryParams ListChannelWebhookQueryParams 
    Security ListChannelWebhookSecurity 
    
}

type ListChannelWebhookListChannelWebhookResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListChannelWebhookListChannelWebhookResponse struct {
    Meta *ListChannelWebhookListChannelWebhookResponseMeta `json:"meta,omitempty"`
    Webhooks []shared.ChatV2ServiceChannelChannelWebhook `json:"webhooks,omitempty"`
    
}

type ListChannelWebhookResponse struct {
    ContentType string 
    ListChannelWebhookResponse *ListChannelWebhookListChannelWebhookResponse 
    StatusCode int64 
    
}

