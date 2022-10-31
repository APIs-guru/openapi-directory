package operations

import (
"openapi/pkg/models/shared")

type PostUsersUserIDImagePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type PostUsersUserIDImageRequest struct {
    PathParams PostUsersUserIDImagePathParams 
    
}

type PostUsersUserIDImageResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

