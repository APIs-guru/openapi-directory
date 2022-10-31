package operations

import (
"openapi/pkg/models/shared")

type GetRolesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetRolesRequest struct {
    PathParams GetRolesPathParams 
    
}

type GetRolesResponse struct {
    Calls []shared.Call 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

