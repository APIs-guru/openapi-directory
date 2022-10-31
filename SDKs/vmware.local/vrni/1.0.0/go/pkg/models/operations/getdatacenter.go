package operations

import (
"openapi/pkg/models/shared")

type GetDatacenterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDatacenterQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetDatacenterSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDatacenterRequest struct {
    PathParams GetDatacenterPathParams 
    QueryParams GetDatacenterQueryParams 
    Security GetDatacenterSecurity 
    
}

type GetDatacenterResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    VcDatacenter *shared.VcDatacenter 
    
}

