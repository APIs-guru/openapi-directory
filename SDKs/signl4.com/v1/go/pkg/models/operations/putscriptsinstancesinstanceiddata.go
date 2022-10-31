package operations

import (
"openapi/pkg/models/shared")

type PutScriptsInstancesInstanceIDDataPathParams struct {
    InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
    
}

type PutScriptsInstancesInstanceIDDataRequests struct {
    ScriptInstanceCustomUserData *shared.ScriptInstanceCustomUserData `request:"mediaType=application/*+json"`
    ScriptInstanceCustomUserData1 *shared.ScriptInstanceCustomUserData `request:"mediaType=application/json"`
    ScriptInstanceCustomUserData2 *shared.ScriptInstanceCustomUserData `request:"mediaType=application/json-patch+json"`
    ScriptInstanceCustomUserData3 *shared.ScriptInstanceCustomUserData `request:"mediaType=text/json"`
    
}

type PutScriptsInstancesInstanceIDDataRequest struct {
    PathParams PutScriptsInstancesInstanceIDDataPathParams 
    Request *PutScriptsInstancesInstanceIDDataRequests 
    
}

type PutScriptsInstancesInstanceIDDataResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScriptInstanceDetails *shared.ScriptInstanceDetails 
    StatusCode int64 
    
}

