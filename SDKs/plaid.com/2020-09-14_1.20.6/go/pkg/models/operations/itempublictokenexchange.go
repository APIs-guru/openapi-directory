package operations

import (
"openapi/pkg/models/shared")

type ItemPublicTokenExchangeRequest struct {
    Request shared.ItemPublicTokenExchangeRequest `request:"mediaType=application/json"`
    
}

type ItemPublicTokenExchangeResponse struct {
    ContentType string 
    ItemPublicTokenExchangeResponse map[string]interface{} 
    StatusCode int64 
    
}

