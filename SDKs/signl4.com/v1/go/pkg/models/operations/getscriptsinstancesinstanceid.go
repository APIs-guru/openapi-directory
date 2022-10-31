package operations

import (
"openapi/pkg/models/shared")

type GetScriptsInstancesInstanceIDPathParams struct {
    InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
    
}

type GetScriptsInstancesInstanceIDRequest struct {
    PathParams GetScriptsInstancesInstanceIDPathParams 
    
}

type GetScriptsInstancesInstanceIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScriptInstanceDetails *shared.ScriptInstanceDetails 
    StatusCode int64 
    
}

