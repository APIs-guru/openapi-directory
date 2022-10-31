package operations

import (
"openapi/pkg/models/shared")

type UpdateEnvironmentRoutePathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type UpdateEnvironmentRouteRequests struct {
    EnvironmentRegistrationCallbackBody *shared.EnvironmentRegistrationCallbackBody `request:"mediaType=application/*+json"`
    EnvironmentRegistrationCallbackBody1 *shared.EnvironmentRegistrationCallbackBody `request:"mediaType=application/json"`
    EnvironmentRegistrationCallbackBody2 *shared.EnvironmentRegistrationCallbackBody `request:"mediaType=application/json-patch+json"`
    EnvironmentRegistrationCallbackBody3 *shared.EnvironmentRegistrationCallbackBody `request:"mediaType=text/json"`
    
}

type UpdateEnvironmentRouteRequest struct {
    PathParams UpdateEnvironmentRoutePathParams 
    Request *UpdateEnvironmentRouteRequests 
    
}

type UpdateEnvironmentRouteResponse struct {
    Body []byte 
    CloudEnvironmentResult *shared.CloudEnvironmentResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

