package operations

import (
"openapi/pkg/models/shared")

type StoresReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoresReadRequest struct {
    PathParams StoresReadPathParams 
    
}

type StoresReadResponse struct {
    ContentType string 
    StatusCode int64 
    StoreSingle *shared.StoreSingle 
    
}

