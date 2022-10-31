package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenRequest struct {
    PathParams GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenPathParams 
    
}

type GetAPIV1EnvironmentsEnvironmentIDHeartbeattokenResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

