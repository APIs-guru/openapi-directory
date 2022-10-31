package operations

import (
"openapi/pkg/models/shared")

type CreateRequest struct {
    Request shared.UserCredential `request:"mediaType=application/json"`
    
}

type CreateResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    Token *shared.Token 
    
}

