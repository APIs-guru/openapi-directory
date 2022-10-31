package operations

import (
"openapi/pkg/models/shared")
var ListServiceParticipantConversationServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceParticipantConversationPathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    
}

type ListServiceParticipantConversationQueryParams struct {
    Address *string `queryParam:"style=form,explode=true,name=Address"`
    Identity *string `queryParam:"style=form,explode=true,name=Identity"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListServiceParticipantConversationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListServiceParticipantConversationRequest struct {
    ServerURL *string 
    PathParams ListServiceParticipantConversationPathParams 
    QueryParams ListServiceParticipantConversationQueryParams 
    Security ListServiceParticipantConversationSecurity 
    
}

type ListServiceParticipantConversationListServiceParticipantConversationResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListServiceParticipantConversationListServiceParticipantConversationResponse struct {
    Conversations []shared.ConversationsV1ServiceServiceParticipantConversation `json:"conversations,omitempty"`
    Meta *ListServiceParticipantConversationListServiceParticipantConversationResponseMeta `json:"meta,omitempty"`
    
}

type ListServiceParticipantConversationResponse struct {
    ContentType string 
    ListServiceParticipantConversationResponse *ListServiceParticipantConversationListServiceParticipantConversationResponse 
    StatusCode int64 
    
}

