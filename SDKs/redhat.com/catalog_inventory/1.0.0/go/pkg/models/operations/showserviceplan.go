package operations

import (
"openapi/pkg/models/shared")

type ShowServicePlanPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ShowServicePlanRequest struct {
    PathParams ShowServicePlanPathParams 
    
}

type ShowServicePlanResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServicePlan *shared.ServicePlan 
    StatusCode int64 
    
}

