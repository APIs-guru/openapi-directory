package operations

import (
"openapi/pkg/models/shared")

type GetVmknicPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetVmknicQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetVmknicSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetVmknicRequest struct {
    PathParams GetVmknicPathParams 
    QueryParams GetVmknicQueryParams 
    Security GetVmknicSecurity 
    
}

type GetVmknicResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    Vmknic *shared.Vmknic 
    
}

