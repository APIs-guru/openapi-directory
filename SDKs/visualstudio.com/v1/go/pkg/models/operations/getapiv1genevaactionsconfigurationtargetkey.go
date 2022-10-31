package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1GenevaActionsConfigurationTargetKeyPathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    Target string `pathParam:"style=simple,explode=false,name=target"`
    
}

type GetAPIV1GenevaActionsConfigurationTargetKeyRequest struct {
    PathParams GetAPIV1GenevaActionsConfigurationTargetKeyPathParams 
    
}

type GetAPIV1GenevaActionsConfigurationTargetKeyResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    SystemConfigurationResponse *shared.SystemConfigurationResponse 
    
}

