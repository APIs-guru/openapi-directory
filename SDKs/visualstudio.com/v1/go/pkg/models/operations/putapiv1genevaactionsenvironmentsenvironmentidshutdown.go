package operations

import (
"openapi/pkg/models/shared")

type PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdownPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdownRequest struct {
    PathParams PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdownPathParams 
    
}

type PutAPIV1GenevaActionsEnvironmentsEnvironmentIDShutdownResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

