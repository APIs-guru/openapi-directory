package operations

import (
"openapi/pkg/models/shared")

type RoleUpdatePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type RoleUpdateRequest struct {
    PathParams RoleUpdatePathParams 
    Request shared.RoleUpdateRequest `request:"mediaType=application/json"`
    
}

type RoleUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

