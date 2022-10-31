package operations

import (
"openapi/pkg/models/shared")

type GetUserResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    User *shared.User 
    
}

