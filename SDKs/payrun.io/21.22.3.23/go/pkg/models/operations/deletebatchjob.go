package operations

import (
"openapi/pkg/models/shared")

type DeleteBatchJobPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type DeleteBatchJobHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteBatchJobRequest struct {
    PathParams DeleteBatchJobPathParams 
    Headers DeleteBatchJobHeaders 
    
}

type DeleteBatchJobResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

