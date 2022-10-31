package operations

import (
"openapi/pkg/models/shared")

type GetAllUserTagsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetAllUserTagsRequest struct {
    Headers GetAllUserTagsHeaders 
    
}

type GetAllUserTagsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

