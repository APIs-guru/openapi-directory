package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams struct {
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequest struct {
    PathParams GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams 
    
}

type GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse struct {
    Body []byte 
    ContentType string 
    EnvironmentStateChange *shared.EnvironmentStateChange 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

