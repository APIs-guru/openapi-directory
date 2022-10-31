package operations

import (
"openapi/pkg/models/shared")

type GetPayRunJobInfoPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type GetPayRunJobInfoHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayRunJobInfoRequest struct {
    PathParams GetPayRunJobInfoPathParams 
    Headers GetPayRunJobInfoHeaders 
    
}

type GetPayRunJobInfoResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    JobInfo *shared.JobInfo 
    StatusCode int64 
    
}

