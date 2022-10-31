package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1PlansResponse struct {
    Body []byte 
    ContentType string 
    PlanResults []shared.PlanResult 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

