package operations

import (
"openapi/pkg/models/shared")

type GetReportLinesFromPayRunPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayRunID string `pathParam:"style=simple,explode=false,name=PayRunId"`
    PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
    
}

type GetReportLinesFromPayRunHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetReportLinesFromPayRunRequest struct {
    PathParams GetReportLinesFromPayRunPathParams 
    Headers GetReportLinesFromPayRunHeaders 
    
}

type GetReportLinesFromPayRunResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

