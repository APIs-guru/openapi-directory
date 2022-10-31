package operations

import (
"openapi/pkg/models/shared")

type GetPaySchedulesWithTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetPaySchedulesWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPaySchedulesWithTagRequest struct {
    PathParams GetPaySchedulesWithTagPathParams 
    Headers GetPaySchedulesWithTagHeaders 
    
}

type GetPaySchedulesWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

