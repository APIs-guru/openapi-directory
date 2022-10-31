package operations

import (
"openapi/pkg/models/shared")

type PutAPIV1EnvironmentsEnvironmentIDPortsPortPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type PutAPIV1EnvironmentsEnvironmentIDPortsPortRequests struct {
    AddForwardedPortSettings *shared.AddForwardedPortSettings `request:"mediaType=application/*+json"`
    AddForwardedPortSettings1 *shared.AddForwardedPortSettings `request:"mediaType=application/json"`
    AddForwardedPortSettings2 *shared.AddForwardedPortSettings `request:"mediaType=application/json-patch+json"`
    AddForwardedPortSettings3 *shared.AddForwardedPortSettings `request:"mediaType=text/json"`
    
}

type PutAPIV1EnvironmentsEnvironmentIDPortsPortRequest struct {
    PathParams PutAPIV1EnvironmentsEnvironmentIDPortsPortPathParams 
    Request *PutAPIV1EnvironmentsEnvironmentIDPortsPortRequests 
    
}

type PutAPIV1EnvironmentsEnvironmentIDPortsPortResponse struct {
    Body []byte 
    ContentType string 
    MessageCodes *int32 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

