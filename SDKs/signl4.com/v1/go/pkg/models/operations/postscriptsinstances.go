package operations

import (
"openapi/pkg/models/shared")

type PostScriptsInstancesRequests struct {
    ScriptInstanceDetails *shared.ScriptInstanceDetails `request:"mediaType=application/*+json"`
    ScriptInstanceDetails1 *shared.ScriptInstanceDetails `request:"mediaType=application/json"`
    ScriptInstanceDetails2 *shared.ScriptInstanceDetails `request:"mediaType=application/json-patch+json"`
    ScriptInstanceDetails3 *shared.ScriptInstanceDetails `request:"mediaType=text/json"`
    
}

type PostScriptsInstancesRequest struct {
    Request *PostScriptsInstancesRequests 
    
}

type PostScriptsInstancesResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScriptInstanceDetails *shared.ScriptInstanceDetails 
    StatusCode int64 
    
}

