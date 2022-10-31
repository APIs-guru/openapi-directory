package operations

import (
"openapi/pkg/models/shared")

type GetVcenterManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetVcenterManagerQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetVcenterManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetVcenterManagerRequest struct {
    PathParams GetVcenterManagerPathParams 
    QueryParams GetVcenterManagerQueryParams 
    Security GetVcenterManagerSecurity 
    
}

type GetVcenterManagerResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    VCenterManager *shared.VCenterManager 
    
}

