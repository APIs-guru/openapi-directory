package operations

import (
"openapi/pkg/models/shared")

type PostPaySchedulePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type PostPayScheduleHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostPayScheduleRequest struct {
    PathParams PostPaySchedulePathParams 
    Headers PostPayScheduleHeaders 
    Request shared.PaySchedule `request:"mediaType=application/json"`
    
}

type PostPayScheduleResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

