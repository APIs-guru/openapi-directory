package operations

import (
"openapi/pkg/models/shared")

type GetTagsFromPayLinePathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayLineID string `pathParam:"style=simple,explode=false,name=PayLineId"`
    
}

type GetTagsFromPayLineHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagsFromPayLineRequest struct {
    PathParams GetTagsFromPayLinePathParams 
    Headers GetTagsFromPayLineHeaders 
    
}

type GetTagsFromPayLineResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

