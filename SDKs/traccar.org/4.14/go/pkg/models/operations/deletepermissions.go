package operations

import (
"openapi/pkg/models/shared")

type DeletePermissionsRequest struct {
    Request shared.Permission `request:"mediaType=application/json"`
    
}

type DeletePermissionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

