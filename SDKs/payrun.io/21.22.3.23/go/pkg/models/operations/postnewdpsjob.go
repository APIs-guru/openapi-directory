package operations

import (
"openapi/pkg/models/shared")

type PostNewDpsJobHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostNewDpsJobRequest struct {
    Headers PostNewDpsJobHeaders 
    Request shared.DpsJobInstruction `request:"mediaType=application/json"`
    
}

type PostNewDpsJobResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

