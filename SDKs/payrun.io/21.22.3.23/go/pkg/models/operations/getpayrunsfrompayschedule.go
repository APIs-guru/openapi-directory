package operations

import (
"openapi/pkg/models/shared")

type GetPayRunsFromPaySchedulePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
    
}

type GetPayRunsFromPayScheduleHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayRunsFromPayScheduleRequest struct {
    PathParams GetPayRunsFromPaySchedulePathParams 
    Headers GetPayRunsFromPayScheduleHeaders 
    
}

type GetPayRunsFromPayScheduleResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

