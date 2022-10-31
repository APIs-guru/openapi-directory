package operations

import (
"openapi/pkg/models/shared")
var ListMessageServers = []string{
	"https://chat.twilio.com",
}

type ListMessagePathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListMessageQueryParams struct {
    Order *shared.MessageEnumOrderTypeEnum `queryParam:"style=form,explode=true,name=Order"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListMessageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListMessageRequest struct {
    ServerURL *string 
    PathParams ListMessagePathParams 
    QueryParams ListMessageQueryParams 
    Security ListMessageSecurity 
    
}

type ListMessageListMessageResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListMessageListMessageResponse struct {
    Messages []shared.ChatV2ServiceChannelMessage `json:"messages,omitempty"`
    Meta *ListMessageListMessageResponseMeta `json:"meta,omitempty"`
    
}

type ListMessageResponse struct {
    ContentType string 
    ListMessageResponse *ListMessageListMessageResponse 
    StatusCode int64 
    
}

