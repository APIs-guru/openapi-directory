package operations

import (
"openapi/pkg/models/shared")

type AddTierPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AddTierSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddTierRequest struct {
    PathParams AddTierPathParams 
    Request shared.TierRequest `request:"mediaType=application/json"`
    Security AddTierSecurity 
    
}

type AddTierResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    Tier *shared.Tier 
    
}

