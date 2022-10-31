package operations

import (
"openapi/pkg/models/shared")

type ResetPasswordRequest struct {
    Request shared.ResetPasswordRequest `request:"mediaType=application/json"`
    
}

type ResetPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    
}

