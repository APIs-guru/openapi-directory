package operations

import (
"openapi/pkg/models/shared")

type GetAttachmentsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAttachmentsIDRequest struct {
    PathParams GetAttachmentsIDPathParams 
    
}

type GetAttachmentsIDResponse struct {
    Attachment *shared.Attachment 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

