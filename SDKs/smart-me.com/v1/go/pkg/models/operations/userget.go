package operations

import (
"openapi/pkg/models/shared")

type UserGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

