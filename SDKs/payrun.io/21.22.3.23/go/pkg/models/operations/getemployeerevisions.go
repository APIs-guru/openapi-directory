package operations

import (
"openapi/pkg/models/shared")

type GetEmployeeRevisionsPathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetEmployeeRevisionsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployeeRevisionsRequest struct {
    PathParams GetEmployeeRevisionsPathParams 
    Headers GetEmployeeRevisionsHeaders 
    
}

type GetEmployeeRevisionsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

