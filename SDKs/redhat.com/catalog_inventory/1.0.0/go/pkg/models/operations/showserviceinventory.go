package operations

import (
"openapi/pkg/models/shared")

type ShowServiceInventoryPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ShowServiceInventoryRequest struct {
    PathParams ShowServiceInventoryPathParams 
    
}

type ShowServiceInventoryResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServiceInventory *shared.ServiceInventory 
    StatusCode int64 
    
}

