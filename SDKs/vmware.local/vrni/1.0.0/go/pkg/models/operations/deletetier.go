package operations

import (
"openapi/pkg/models/shared")

type DeleteTierPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    TierID string `pathParam:"style=simple,explode=false,name=tier-id"`
    
}

type DeleteTierSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteTierRequest struct {
    PathParams DeleteTierPathParams 
    Security DeleteTierSecurity 
    
}

type DeleteTierResponse struct {
    ContentType string 
    StatusCode int64 
    
}

