package operations

import (
"openapi/pkg/models/shared")

type DeleteHpovManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteHpovManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteHpovManagerRequest struct {
    PathParams DeleteHpovManagerPathParams 
    Security DeleteHpovManagerSecurity 
    
}

type DeleteHpovManagerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

