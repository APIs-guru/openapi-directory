package operations

import (
"openapi/pkg/models/shared")

type PostAPIV1GenevaActionsConfigurationTargetPathParams struct {
    Target string `pathParam:"style=simple,explode=false,name=target"`
    
}

type PostAPIV1GenevaActionsConfigurationTargetRequests struct {
    UpdateSystemConfigurationBody *shared.UpdateSystemConfigurationBody `request:"mediaType=application/*+json"`
    UpdateSystemConfigurationBody1 *shared.UpdateSystemConfigurationBody `request:"mediaType=application/json"`
    UpdateSystemConfigurationBody2 *shared.UpdateSystemConfigurationBody `request:"mediaType=application/json-patch+json"`
    UpdateSystemConfigurationBody3 *shared.UpdateSystemConfigurationBody `request:"mediaType=text/json"`
    
}

type PostAPIV1GenevaActionsConfigurationTargetRequest struct {
    PathParams PostAPIV1GenevaActionsConfigurationTargetPathParams 
    Request PostAPIV1GenevaActionsConfigurationTargetRequests 
    
}

type PostAPIV1GenevaActionsConfigurationTargetResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    SystemConfigurationResponse *shared.SystemConfigurationResponse 
    
}

