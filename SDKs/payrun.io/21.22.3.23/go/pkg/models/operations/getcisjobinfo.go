package operations

import (
"openapi/pkg/models/shared")

type GetCisJobInfoPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type GetCisJobInfoHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetCisJobInfoRequest struct {
    PathParams GetCisJobInfoPathParams 
    Headers GetCisJobInfoHeaders 
    
}

type GetCisJobInfoResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    JobInfo *shared.JobInfo 
    StatusCode int64 
    
}

