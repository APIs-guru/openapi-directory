package operations



type ReportConversationPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type ReportConversationRequestBody struct {
    Reason string `multipartForm:"name=reason"`
    
}

type ReportConversationRequest struct {
    PathParams ReportConversationPathParams 
    Request ReportConversationRequestBody `request:"mediaType=multipart/form-data"`
    
}

type ReportConversationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

