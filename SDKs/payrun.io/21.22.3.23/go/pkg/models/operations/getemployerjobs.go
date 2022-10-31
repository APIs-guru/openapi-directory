package operations

import (
"openapi/pkg/models/shared")

type GetEmployerJobsPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetEmployerJobsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployerJobsRequest struct {
    PathParams GetEmployerJobsPathParams 
    Headers GetEmployerJobsHeaders 
    
}

type GetEmployerJobsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetEmployerJobs200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

