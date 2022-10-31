package operations

import (
"openapi/pkg/models/shared")

type PostMyConversationsConversationIDMessagesPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type PostMyConversationsConversationIDMessagesRequestBody struct {
    Body string `json:"body"`
    
}

type PostMyConversationsConversationIDMessagesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyConversationsConversationIDMessagesRequest struct {
    PathParams PostMyConversationsConversationIDMessagesPathParams 
    Request *PostMyConversationsConversationIDMessagesRequestBody `request:"mediaType=application/json"`
    Security PostMyConversationsConversationIDMessagesSecurity 
    
}

type PostMyConversationsConversationIDMessagesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

