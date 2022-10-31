package operations

import (
"openapi/pkg/models/shared")

type PostUsersRequest struct {
    Request shared.User `request:"mediaType=application/json"`
    
}

type PostUsersResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

