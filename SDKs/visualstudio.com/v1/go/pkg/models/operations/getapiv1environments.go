package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1EnvironmentsQueryParams struct {
    Deleted *bool `queryParam:"style=form,explode=true,name=deleted"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    PlanID *string `queryParam:"style=form,explode=true,name=planId"`
    
}

type GetAPIV1EnvironmentsRequest struct {
    QueryParams GetAPIV1EnvironmentsQueryParams 
    
}

type GetAPIV1EnvironmentsResponse struct {
    Body []byte 
    CloudEnvironmentResults []shared.CloudEnvironmentResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

