package operations

import (
"openapi/pkg/models/shared")

type GetServicePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetServiceQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetServiceSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetServiceRequest struct {
    PathParams GetServicePathParams 
    QueryParams GetServiceQueryParams 
    Security GetServiceSecurity 
    
}

type GetServiceResponse struct {
    APIError *shared.APIError 
    BaseService *shared.BaseService 
    ContentType string 
    StatusCode int64 
    
}

