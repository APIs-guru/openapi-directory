package operations

import (
"openapi/pkg/models/shared")

type GetPayRunJobsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayRunJobsRequest struct {
    Headers GetPayRunJobsHeaders 
    
}

type GetPayRunJobsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

