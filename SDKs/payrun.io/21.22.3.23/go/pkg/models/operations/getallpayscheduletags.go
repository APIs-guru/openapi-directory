package operations

import (
"openapi/pkg/models/shared")

type GetAllPayScheduleTagsPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetAllPayScheduleTagsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetAllPayScheduleTagsRequest struct {
    PathParams GetAllPayScheduleTagsPathParams 
    Headers GetAllPayScheduleTagsHeaders 
    
}

type GetAllPayScheduleTagsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

