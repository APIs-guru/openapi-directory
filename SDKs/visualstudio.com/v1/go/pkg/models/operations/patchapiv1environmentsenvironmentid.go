package operations

import (
"openapi/pkg/models/shared")

type PatchAPIV1EnvironmentsEnvironmentIDPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type PatchAPIV1EnvironmentsEnvironmentIDRequests struct {
    UpdateCloudEnvironmentBody *shared.UpdateCloudEnvironmentBody `request:"mediaType=application/*+json"`
    UpdateCloudEnvironmentBody1 *shared.UpdateCloudEnvironmentBody `request:"mediaType=application/json"`
    UpdateCloudEnvironmentBody2 *shared.UpdateCloudEnvironmentBody `request:"mediaType=application/json-patch+json"`
    UpdateCloudEnvironmentBody3 *shared.UpdateCloudEnvironmentBody `request:"mediaType=text/json"`
    
}

type PatchAPIV1EnvironmentsEnvironmentIDRequest struct {
    PathParams PatchAPIV1EnvironmentsEnvironmentIDPathParams 
    Request *PatchAPIV1EnvironmentsEnvironmentIDRequests 
    
}

type PatchAPIV1EnvironmentsEnvironmentIDResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    MessageCodes []int32 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

