package operations

import (
"openapi/pkg/models/shared")

type GetEmployersWithTagPathParams struct {
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetEmployersWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployersWithTagRequest struct {
    PathParams GetEmployersWithTagPathParams 
    Headers GetEmployersWithTagHeaders 
    
}

type GetEmployersWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

