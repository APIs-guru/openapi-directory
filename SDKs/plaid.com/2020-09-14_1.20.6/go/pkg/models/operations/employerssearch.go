package operations

import (
"openapi/pkg/models/shared")

type EmployersSearchRequest struct {
    Request shared.EmployersSearchRequest `request:"mediaType=application/json"`
    
}

type EmployersSearchResponse struct {
    ContentType string 
    EmployersSearchResponse map[string]interface{} 
    StatusCode int64 
    
}

