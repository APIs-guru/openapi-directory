package operations

import (
"openapi/pkg/models/shared")

type GetEnvironmentRoutePathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type GetEnvironmentRouteQueryParams struct {
    Connect *bool `queryParam:"style=form,explode=true,name=connect"`
    PfConnect *bool `queryParam:"style=form,explode=true,name=pfConnect"`
    
}

type GetEnvironmentRouteRequest struct {
    PathParams GetEnvironmentRoutePathParams 
    QueryParams GetEnvironmentRouteQueryParams 
    
}

type GetEnvironmentRouteResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

