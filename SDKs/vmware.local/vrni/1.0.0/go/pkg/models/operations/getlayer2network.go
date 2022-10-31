package operations

import (
"openapi/pkg/models/shared")

type GetLayer2NetworkPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetLayer2NetworkQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetLayer2NetworkSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLayer2NetworkRequest struct {
    PathParams GetLayer2NetworkPathParams 
    QueryParams GetLayer2NetworkQueryParams 
    Security GetLayer2NetworkSecurity 
    
}

type GetLayer2NetworkResponse struct {
    APIError *shared.APIError 
    BaseL2Network *shared.BaseL2Network 
    ContentType string 
    StatusCode int64 
    
}

