package operations

import (
"openapi/pkg/models/shared")

type PutScriptsInstancesInstanceIDPathParams struct {
    InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
    
}

type PutScriptsInstancesInstanceIDRequests struct {
    ScriptInstanceDetails *shared.ScriptInstanceDetails `request:"mediaType=application/*+json"`
    ScriptInstanceDetails1 *shared.ScriptInstanceDetails `request:"mediaType=application/json"`
    ScriptInstanceDetails2 *shared.ScriptInstanceDetails `request:"mediaType=application/json-patch+json"`
    ScriptInstanceDetails3 *shared.ScriptInstanceDetails `request:"mediaType=text/json"`
    
}

type PutScriptsInstancesInstanceIDRequest struct {
    PathParams PutScriptsInstancesInstanceIDPathParams 
    Request *PutScriptsInstancesInstanceIDRequests 
    
}

type PutScriptsInstancesInstanceIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScriptInstanceDetails *shared.ScriptInstanceDetails 
    StatusCode int64 
    
}

