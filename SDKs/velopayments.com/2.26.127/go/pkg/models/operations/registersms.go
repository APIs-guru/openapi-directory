package operations

import (
"openapi/pkg/models/shared")

type RegisterSmsRequest struct {
    Request shared.RegisterSmsRequest `request:"mediaType=application/json"`
    
}

type RegisterSmsResponse struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

