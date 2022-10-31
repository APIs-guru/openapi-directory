package operations

import (
"openapi/pkg/models/shared")

type ItemApplicationScopesUpdateRequest struct {
    Request shared.ItemApplicationScopesUpdateRequest `request:"mediaType=application/json"`
    
}

type ItemApplicationScopesUpdateResponse struct {
    ContentType string 
    Error map[string]interface{} 
    ItemApplicationScopesUpdateResponse *shared.ItemApplicationScopesUpdateResponse 
    StatusCode int64 
    
}

