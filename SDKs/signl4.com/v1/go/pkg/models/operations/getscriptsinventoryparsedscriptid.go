package operations

import (
"openapi/pkg/models/shared")

type GetScriptsInventoryParsedScriptIDPathParams struct {
    ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
    
}

type GetScriptsInventoryParsedScriptIDQueryParams struct {
    Language *string `queryParam:"style=form,explode=true,name=language"`
    
}

type GetScriptsInventoryParsedScriptIDRequest struct {
    PathParams GetScriptsInventoryParsedScriptIDPathParams 
    QueryParams GetScriptsInventoryParsedScriptIDQueryParams 
    
}

type GetScriptsInventoryParsedScriptIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScriptInstanceDetails *shared.ScriptInstanceDetails 
    StatusCode int64 
    
}

