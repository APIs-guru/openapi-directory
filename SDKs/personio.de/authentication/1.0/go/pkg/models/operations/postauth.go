package operations

import (
"openapi/pkg/models/shared")

type PostAuthQueryParams struct {
    ClientID string `queryParam:"style=form,explode=true,name=client_id"`
    ClientSecret string `queryParam:"style=form,explode=true,name=client_secret"`
    
}

type PostAuthRequest struct {
    QueryParams PostAuthQueryParams 
    
}

type PostAuthResponse struct {
    AuthenticationTokenResponse *shared.AuthenticationTokenResponse 
    ContentType string 
    StatusCode int64 
    
}

