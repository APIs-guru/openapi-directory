package operations

import (
"openapi/pkg/models/shared")

type GetEmployeesFromPaySchedulePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
    
}

type GetEmployeesFromPayScheduleHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployeesFromPayScheduleRequest struct {
    PathParams GetEmployeesFromPaySchedulePathParams 
    Headers GetEmployeesFromPayScheduleHeaders 
    
}

type GetEmployeesFromPayScheduleResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

