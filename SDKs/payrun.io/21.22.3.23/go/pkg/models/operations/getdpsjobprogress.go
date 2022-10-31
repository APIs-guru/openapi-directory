package operations

import (
"openapi/pkg/models/shared")

type GetDpsJobProgressPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type GetDpsJobProgressHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetDpsJobProgressRequest struct {
    PathParams GetDpsJobProgressPathParams 
    Headers GetDpsJobProgressHeaders 
    
}

type GetDpsJobProgressResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

