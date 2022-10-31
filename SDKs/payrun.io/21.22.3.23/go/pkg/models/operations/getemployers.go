package operations

import (
"openapi/pkg/models/shared")

type GetEmployersHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployersRequest struct {
    Headers GetEmployersHeaders 
    
}

type GetEmployersResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

