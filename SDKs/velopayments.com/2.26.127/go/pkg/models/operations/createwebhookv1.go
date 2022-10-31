package operations

import (
"openapi/pkg/models/shared")

type CreateWebhookV1Request struct {
    Request *shared.CreateWebhookRequest `request:"mediaType=application/json"`
    
}

type CreateWebhookV1Response struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

