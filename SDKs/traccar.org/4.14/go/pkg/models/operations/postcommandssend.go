package operations

import (
"openapi/pkg/models/shared")

type PostCommandsSendRequest struct {
    Request shared.Command `request:"mediaType=application/json"`
    
}

type PostCommandsSendResponse struct {
    Command *shared.Command 
    ContentType string 
    StatusCode int64 
    
}

