package operations

import (
"openapi/pkg/models/shared")

type LiabilitiesGetRequest struct {
    Request shared.LiabilitiesGetRequest `request:"mediaType=application/json"`
    
}

type LiabilitiesGetResponse struct {
    ContentType string 
    LiabilitiesGetResponse map[string]interface{} 
    StatusCode int64 
    
}

