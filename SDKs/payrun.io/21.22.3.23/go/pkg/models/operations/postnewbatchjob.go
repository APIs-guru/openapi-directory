package operations

import (
"openapi/pkg/models/shared")

type PostNewBatchJobHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostNewBatchJobRequest struct {
    Headers PostNewBatchJobHeaders 
    Request shared.BatchJobInstruction `request:"mediaType=application/json"`
    
}

type PostNewBatchJobResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

