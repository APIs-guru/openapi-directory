package operations

import (
"openapi/pkg/models/shared")

type GetSelfResponse struct {
    ContentType string 
    StatusCode int64 
    UserResponse *shared.UserResponse 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

