package operations



type DeleteConversationPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type DeleteConversationQueryParams struct {
    MessageID string `queryParam:"style=form,explode=true,name=message_id"`
    
}

type DeleteConversationRequest struct {
    PathParams DeleteConversationPathParams 
    QueryParams DeleteConversationQueryParams 
    
}

type DeleteConversationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

