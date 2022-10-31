package operations

import (
"openapi/pkg/models/shared")

type UserDetailsUpdateForSelfRequest struct {
    Request shared.PayeeUserSelfUpdateRequest `request:"mediaType=application/json"`
    
}

type UserDetailsUpdateForSelfResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse409 *interface{} 
    
}

