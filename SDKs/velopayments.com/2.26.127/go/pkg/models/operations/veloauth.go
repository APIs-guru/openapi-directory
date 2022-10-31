package operations

import (
"openapi/pkg/models/shared")

type VeloAuthQueryParams struct {
    GrantType *string `queryParam:"style=form,explode=true,name=grant_type"`
    
}

type VeloAuthSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type VeloAuthRequest struct {
    QueryParams VeloAuthQueryParams 
    Security VeloAuthSecurity 
    
}

type VeloAuthResponse struct {
    AuthResponse *shared.AuthResponse 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

