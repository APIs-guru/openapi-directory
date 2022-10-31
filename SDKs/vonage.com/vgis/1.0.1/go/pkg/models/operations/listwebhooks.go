package operations

import (
"openapi/pkg/models/shared")

type ListWebhooksResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    Webhooks []shared.Webhook 
    
}

