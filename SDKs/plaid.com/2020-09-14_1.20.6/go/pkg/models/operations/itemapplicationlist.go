package operations

import (
"openapi/pkg/models/shared")

type ItemApplicationListRequest struct {
    Request shared.ItemApplicationListRequest `request:"mediaType=application/json"`
    
}

type ItemApplicationListResponse struct {
    ContentType string 
    Error map[string]interface{} 
    ItemApplicationListResponse *shared.ItemApplicationListResponse 
    StatusCode int64 
    
}

