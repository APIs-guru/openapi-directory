package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1PrebuildsTemplatesRequests struct {
    CreateCloudEnvironmentBody *shared.CreateCloudEnvironmentBody `request:"mediaType=application/*+json"`
    CreateCloudEnvironmentBody1 *shared.CreateCloudEnvironmentBody `request:"mediaType=application/json"`
    CreateCloudEnvironmentBody2 *shared.CreateCloudEnvironmentBody `request:"mediaType=application/json-patch+json"`
    CreateCloudEnvironmentBody3 *shared.CreateCloudEnvironmentBody `request:"mediaType=text/json"`
    
}

type PostAPIV1PrebuildsTemplatesRequest struct {
    Request *PostAPIV1PrebuildsTemplatesRequests 
    
}

type PostAPIV1PrebuildsTemplatesResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    MessageCodes *int32 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

