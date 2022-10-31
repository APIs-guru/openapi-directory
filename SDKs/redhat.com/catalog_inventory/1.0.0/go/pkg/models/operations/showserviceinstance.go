package operations

import (
"openapi/pkg/models/shared")

type ShowServiceInstancePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ShowServiceInstanceRequest struct {
    PathParams ShowServiceInstancePathParams 
    
}

type ShowServiceInstanceResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServiceInstance *shared.ServiceInstance 
    StatusCode int64 
    
}

