package operations

import (
"openapi/pkg/models/shared")

type PatchPermissionPathParams struct {
    PermissionID string `pathParam:"style=simple,explode=false,name=PermissionId"`
    
}

type PatchPermissionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PatchPermissionRequest struct {
    PathParams PatchPermissionPathParams 
    Headers PatchPermissionHeaders 
    
}

type PatchPermissionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Permission *shared.Permission 
    StatusCode int64 
    
}

