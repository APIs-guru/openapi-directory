package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1EnvironmentsEnvironmentIDArchivePathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type GetAPIV1EnvironmentsEnvironmentIDArchiveRequest struct {
    PathParams GetAPIV1EnvironmentsEnvironmentIDArchivePathParams 
    
}

type GetAPIV1EnvironmentsEnvironmentIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    MessageCodes *int32 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    UnfilteredCloudEnvironmentResult *shared.UnfilteredCloudEnvironmentResult 
    
}

