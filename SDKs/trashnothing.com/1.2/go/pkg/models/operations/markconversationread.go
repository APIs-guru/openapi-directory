package operations



type MarkConversationReadPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type MarkConversationReadRequestBody struct {
    MessageID string `multipartForm:"name=message_id"`
    
}

type MarkConversationReadRequest struct {
    PathParams MarkConversationReadPathParams 
    Request MarkConversationReadRequestBody `request:"mediaType=multipart/form-data"`
    
}

type MarkConversationReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

