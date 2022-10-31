package operations

import (
"openapi/pkg/models/shared")

type GetRtiJobInfoPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type GetRtiJobInfoHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetRtiJobInfoRequest struct {
    PathParams GetRtiJobInfoPathParams 
    Headers GetRtiJobInfoHeaders 
    
}

type GetRtiJobInfoResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    JobInfo *shared.JobInfo 
    StatusCode int64 
    
}

