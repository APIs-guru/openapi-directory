package operations

import (
"openapi/pkg/models/shared")

type GetJournalLinesFromEmployeePathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetJournalLinesFromEmployeeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetJournalLinesFromEmployeeRequest struct {
    PathParams GetJournalLinesFromEmployeePathParams 
    Headers GetJournalLinesFromEmployeeHeaders 
    
}

type GetJournalLinesFromEmployeeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

