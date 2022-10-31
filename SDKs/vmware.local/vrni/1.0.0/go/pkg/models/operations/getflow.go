package operations

import (
"openapi/pkg/models/shared")

type GetFlowPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetFlowQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetFlowSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFlowRequest struct {
    PathParams GetFlowPathParams 
    QueryParams GetFlowQueryParams 
    Security GetFlowSecurity 
    
}

type GetFlowResponse struct {
    APIError *shared.APIError 
    ContentType string 
    Flow *shared.Flow 
    StatusCode int64 
    
}

