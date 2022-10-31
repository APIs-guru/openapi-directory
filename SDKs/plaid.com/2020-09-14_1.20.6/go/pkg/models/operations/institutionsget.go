package operations

import (
"openapi/pkg/models/shared")

type InstitutionsGetRequest struct {
    Request shared.InstitutionsGetRequest `request:"mediaType=application/json"`
    
}

type InstitutionsGetResponse struct {
    ContentType string 
    Error map[string]interface{} 
    InstitutionsGetResponse map[string]interface{} 
    StatusCode int64 
    
}

