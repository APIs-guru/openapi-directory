package operations

import (
"openapi/pkg/models/shared")

type ValidateAccessTokenHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=Authorization"`
    
}

type ValidateAccessTokenRequest struct {
    Headers ValidateAccessTokenHeaders 
    Request shared.AccessTokenValidationRequest `request:"mediaType=application/json"`
    
}

type ValidateAccessTokenResponse struct {
    AccessTokenResponse *shared.AccessTokenResponse 
    ContentType string 
    StatusCode int64 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

