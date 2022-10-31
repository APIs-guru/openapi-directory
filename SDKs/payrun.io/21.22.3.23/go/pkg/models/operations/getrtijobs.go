package operations

import (
"openapi/pkg/models/shared")

type GetRtiJobsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetRtiJobsRequest struct {
    Headers GetRtiJobsHeaders 
    
}

type GetRtiJobsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

