package operations

import (
"openapi/pkg/models/shared")

type GetBatchJobsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetBatchJobsRequest struct {
    Headers GetBatchJobsHeaders 
    
}

type GetBatchJobsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

