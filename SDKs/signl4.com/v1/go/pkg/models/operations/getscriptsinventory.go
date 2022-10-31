package operations

import (
"openapi/pkg/models/shared")

type GetScriptsInventoryResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    InventoryScriptInfos []shared.InventoryScriptInfo 
    StatusCode int64 
    
}

