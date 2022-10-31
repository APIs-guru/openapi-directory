package operations

import (
"openapi/pkg/models/shared")

type GetPayRunsWithTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetPayRunsWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayRunsWithTagRequest struct {
    PathParams GetPayRunsWithTagPathParams 
    Headers GetPayRunsWithTagHeaders 
    
}

type GetPayRunsWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

