package operations

import (
"openapi/pkg/models/shared")

type GetPayScheduleFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
    
}

type GetPayScheduleFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayScheduleFromEmployerRequest struct {
    PathParams GetPayScheduleFromEmployerPathParams 
    Headers GetPayScheduleFromEmployerHeaders 
    
}

type GetPayScheduleFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    PaySchedule *shared.PaySchedule 
    StatusCode int64 
    
}

