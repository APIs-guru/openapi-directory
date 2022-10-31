package operations

import (
"openapi/pkg/models/shared")

type GetJournalLinesFromPayRunPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayRunID string `pathParam:"style=simple,explode=false,name=PayRunId"`
    PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
    
}

type GetJournalLinesFromPayRunHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetJournalLinesFromPayRunRequest struct {
    PathParams GetJournalLinesFromPayRunPathParams 
    Headers GetJournalLinesFromPayRunHeaders 
    
}

type GetJournalLinesFromPayRunResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

