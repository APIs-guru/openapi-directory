package operations

import (
"openapi/pkg/models/shared")
var ListServiceConversationMessageServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceConversationMessagePathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
    
}

type ListServiceConversationMessageQueryParams struct {
    Order *shared.ServiceConversationMessageEnumOrderTypeEnum `queryParam:"style=form,explode=true,name=Order"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListServiceConversationMessageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListServiceConversationMessageRequest struct {
    ServerURL *string 
    PathParams ListServiceConversationMessagePathParams 
    QueryParams ListServiceConversationMessageQueryParams 
    Security ListServiceConversationMessageSecurity 
    
}

type ListServiceConversationMessageListServiceConversationMessageResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListServiceConversationMessageListServiceConversationMessageResponse struct {
    Messages []shared.ConversationsV1ServiceServiceConversationServiceConversationMessage `json:"messages,omitempty"`
    Meta *ListServiceConversationMessageListServiceConversationMessageResponseMeta `json:"meta,omitempty"`
    
}

type ListServiceConversationMessageResponse struct {
    ContentType string 
    ListServiceConversationMessageResponse *ListServiceConversationMessageListServiceConversationMessageResponse 
    StatusCode int64 
    
}

