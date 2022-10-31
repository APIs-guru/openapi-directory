package operations

import (
"openapi/pkg/models/shared")

type ListApplicationTiersPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ListApplicationTiersSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListApplicationTiersRequest struct {
    PathParams ListApplicationTiersPathParams 
    Security ListApplicationTiersSecurity 
    
}

type ListApplicationTiersResponse struct {
    ContentType string 
    StatusCode int64 
    TierListResponse *shared.TierListResponse 
    
}

