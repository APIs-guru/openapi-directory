package operations

import (
"openapi/pkg/models/shared")

type GetRtiJobProgressPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type GetRtiJobProgressHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetRtiJobProgressRequest struct {
    PathParams GetRtiJobProgressPathParams 
    Headers GetRtiJobProgressHeaders 
    
}

type GetRtiJobProgressResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

