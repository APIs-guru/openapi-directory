package operations

import (
"openapi/pkg/models/shared")

type GetApplicationTierPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    TierID string `pathParam:"style=simple,explode=false,name=tier-id"`
    
}

type GetApplicationTierSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetApplicationTierRequest struct {
    PathParams GetApplicationTierPathParams 
    Security GetApplicationTierSecurity 
    
}

type GetApplicationTierResponse struct {
    ContentType string 
    StatusCode int64 
    Tier *shared.Tier 
    
}

