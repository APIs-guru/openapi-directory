package operations

import (
"openapi/pkg/models/shared")

type PostTransactionsIDAttachmentsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostTransactionsIDAttachmentsRequestBody struct {
    AttachmentID *int64 `json:"attachment_id,omitempty"`
    
}

type PostTransactionsIDAttachmentsRequest struct {
    PathParams PostTransactionsIDAttachmentsPathParams 
    Request *PostTransactionsIDAttachmentsRequestBody `request:"mediaType=application/json"`
    
}

type PostTransactionsIDAttachmentsResponse struct {
    Attachment *shared.Attachment 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

