package operations

import (
"openapi/pkg/models/shared")

type GetAllJournalLinesWithTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetAllJournalLinesWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetAllJournalLinesWithTagRequest struct {
    PathParams GetAllJournalLinesWithTagPathParams 
    Headers GetAllJournalLinesWithTagHeaders 
    
}

type GetAllJournalLinesWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

