package operations

import (
"openapi/pkg/models/shared")

type ItemWebhookUpdateRequest struct {
    Request shared.ItemWebhookUpdateRequest `request:"mediaType=application/json"`
    
}

type ItemWebhookUpdateResponse struct {
    ContentType string 
    ItemWebhookUpdateResponse map[string]interface{} 
    StatusCode int64 
    
}

