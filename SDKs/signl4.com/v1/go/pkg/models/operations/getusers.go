package operations

import (
"openapi/pkg/models/shared")

type GetUsersResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    UserInfos []shared.UserInfo 
    
}

