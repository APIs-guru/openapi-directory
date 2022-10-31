package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1EnvironmentsEnvironmentIDArchivePathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type PostAPIV1EnvironmentsEnvironmentIDArchiveRequest struct {
    PathParams PostAPIV1EnvironmentsEnvironmentIDArchivePathParams 
    
}

type PostAPIV1EnvironmentsEnvironmentIDArchiveResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    MessageCodes *int32 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

