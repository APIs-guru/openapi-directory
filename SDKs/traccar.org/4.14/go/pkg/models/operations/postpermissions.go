package operations

import (
"openapi/pkg/models/shared")

type PostPermissionsRequest struct {
    Request shared.Permission `request:"mediaType=application/json"`
    
}

type PostPermissionsResponse struct {
    ContentType string 
    Permission *shared.Permission 
    StatusCode int64 
    
}

