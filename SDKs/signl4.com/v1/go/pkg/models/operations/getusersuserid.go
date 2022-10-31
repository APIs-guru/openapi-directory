package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserIDPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetUsersUserIDRequest struct {
    PathParams GetUsersUserIDPathParams 
    
}

type GetUsersUserIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    UserInfo *shared.UserInfo 
    
}

