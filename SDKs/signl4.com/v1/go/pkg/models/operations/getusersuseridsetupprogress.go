package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserIDSetupProgressPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetUsersUserIDSetupProgressRequest struct {
    PathParams GetUsersUserIDSetupProgressPathParams 
    
}

type GetUsersUserIDSetupProgressResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    UserSetupProgress *shared.UserSetupProgress 
    
}

