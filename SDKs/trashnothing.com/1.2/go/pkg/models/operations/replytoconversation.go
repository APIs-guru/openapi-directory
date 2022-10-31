package operations

import (
"openapi/pkg/models/shared")

type ReplyToConversationPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversation_id"`
    
}

type ReplyToConversationRequestBody struct {
    Content string `multipartForm:"name=content"`
    DevicePixelRatio *float64 `multipartForm:"name=device_pixel_ratio"`
    PhotoIds *string `multipartForm:"name=photo_ids"`
    
}

type ReplyToConversationRequest struct {
    PathParams ReplyToConversationPathParams 
    Request ReplyToConversationRequestBody `request:"mediaType=multipart/form-data"`
    
}

type ReplyToConversationResponse struct {
    ContentType string 
    Message *shared.Message 
    StatusCode int64 
    
}

