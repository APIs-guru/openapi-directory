package operations

import (
"openapi/pkg/models/shared")

type AuthTokenRequest struct {
    Request *shared.TokenRequest `request:"mediaType=application/json"`
    
}

type AuthTokenResponse struct {
    ContentType string 
    StatusCode int64 
    TokenResponse *shared.TokenResponse 
    
}

