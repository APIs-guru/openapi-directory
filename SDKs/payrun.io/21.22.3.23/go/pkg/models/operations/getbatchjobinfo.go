package operations

import (
"openapi/pkg/models/shared")

type GetBatchJobInfoPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type GetBatchJobInfoHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetBatchJobInfoRequest struct {
    PathParams GetBatchJobInfoPathParams 
    Headers GetBatchJobInfoHeaders 
    
}

type GetBatchJobInfoResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    JobInfo *shared.JobInfo 
    StatusCode int64 
    
}

