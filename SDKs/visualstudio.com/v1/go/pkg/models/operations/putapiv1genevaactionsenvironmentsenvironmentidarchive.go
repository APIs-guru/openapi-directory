package operations

import (
"openapi/pkg/models/shared")

type PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchivePathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchiveRequest struct {
    PathParams PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchivePathParams 
    
}

type PutAPIV1GenevaActionsEnvironmentsEnvironmentIDArchiveResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

