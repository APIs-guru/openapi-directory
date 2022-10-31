package operations

import (
"openapi/pkg/models/shared")

type PatchAPIV1EnvironmentsEnvironmentIDFolderPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type PatchAPIV1EnvironmentsEnvironmentIDFolderRequests struct {
    CloudEnvironmentFolderBody *shared.CloudEnvironmentFolderBody `request:"mediaType=application/*+json"`
    CloudEnvironmentFolderBody1 *shared.CloudEnvironmentFolderBody `request:"mediaType=application/json"`
    CloudEnvironmentFolderBody2 *shared.CloudEnvironmentFolderBody `request:"mediaType=application/json-patch+json"`
    CloudEnvironmentFolderBody3 *shared.CloudEnvironmentFolderBody `request:"mediaType=text/json"`
    
}

type PatchAPIV1EnvironmentsEnvironmentIDFolderRequest struct {
    PathParams PatchAPIV1EnvironmentsEnvironmentIDFolderPathParams 
    Request *PatchAPIV1EnvironmentsEnvironmentIDFolderRequests 
    
}

type PatchAPIV1EnvironmentsEnvironmentIDFolderResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    MessageCodes []int32 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

