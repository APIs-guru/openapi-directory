package operations

import (
"openapi/pkg/models/shared")

type GetAllPayLineTagsPathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetAllPayLineTagsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetAllPayLineTagsRequest struct {
    PathParams GetAllPayLineTagsPathParams 
    Headers GetAllPayLineTagsHeaders 
    
}

type GetAllPayLineTagsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

