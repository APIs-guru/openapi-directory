package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1EnvironmentsQueryParams struct {
    Access *bool `queryParam:"style=form,explode=true,name=access"`
    
}

type PostAPIV1EnvironmentsRequests struct {
    CreateCloudEnvironmentBody *shared.CreateCloudEnvironmentBody `request:"mediaType=application/*+json"`
    CreateCloudEnvironmentBody1 *shared.CreateCloudEnvironmentBody `request:"mediaType=application/json"`
    CreateCloudEnvironmentBody2 *shared.CreateCloudEnvironmentBody `request:"mediaType=application/json-patch+json"`
    CreateCloudEnvironmentBody3 *shared.CreateCloudEnvironmentBody `request:"mediaType=text/json"`
    
}

type PostAPIV1EnvironmentsRequest struct {
    QueryParams PostAPIV1EnvironmentsQueryParams 
    Request *PostAPIV1EnvironmentsRequests 
    
}

type PostAPIV1EnvironmentsResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    MessageCodes *int32 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

