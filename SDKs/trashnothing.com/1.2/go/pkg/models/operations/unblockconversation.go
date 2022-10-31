package operations



type UnblockConversationPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type UnblockConversationRequest struct {
    PathParams UnblockConversationPathParams 
    
}

type UnblockConversationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

