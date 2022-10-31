package operations

import (
"time"
"openapi/pkg/models/shared")

type GetEmployeesFromPayScheduleOnEffectiveDatePathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
    
}

type GetEmployeesFromPayScheduleOnEffectiveDateHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployeesFromPayScheduleOnEffectiveDateRequest struct {
    PathParams GetEmployeesFromPayScheduleOnEffectiveDatePathParams 
    Headers GetEmployeesFromPayScheduleOnEffectiveDateHeaders 
    
}

type GetEmployeesFromPayScheduleOnEffectiveDateResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

