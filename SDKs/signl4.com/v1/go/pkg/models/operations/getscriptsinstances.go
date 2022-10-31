package operations

import (
"openapi/pkg/models/shared")

type GetScriptsInstancesQueryParams struct {
    TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
    
}

type GetScriptsInstancesRequest struct {
    QueryParams GetScriptsInstancesQueryParams 
    
}

type GetScriptsInstancesResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScriptInstanceDetails []shared.ScriptInstanceDetails 
    StatusCode int64 
    
}

