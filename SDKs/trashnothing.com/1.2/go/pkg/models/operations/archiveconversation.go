package operations



type ArchiveConversationPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type ArchiveConversationRequest struct {
    PathParams ArchiveConversationPathParams 
    
}

type ArchiveConversationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

