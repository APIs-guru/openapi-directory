package operations

import (
"openapi/pkg/models/shared")

type PostScriptsInstancesInstanceIDDisablePathParams struct {
    InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
    
}

type PostScriptsInstancesInstanceIDDisableRequest struct {
    PathParams PostScriptsInstancesInstanceIDDisablePathParams 
    
}

type PostScriptsInstancesInstanceIDDisableResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScriptInstanceDetails *shared.ScriptInstanceDetails 
    StatusCode int64 
    
}

