package operations

import (
"openapi/pkg/models/shared")

type PostAttributesComputedRequest struct {
    Request shared.Attribute `request:"mediaType=application/json"`
    
}

type PostAttributesComputedResponse struct {
    Attribute *shared.Attribute 
    ContentType string 
    StatusCode int64 
    
}

