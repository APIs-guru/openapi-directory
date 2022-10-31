package operations

import (
"openapi/pkg/models/shared")

type GetTagFromJournalLinePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    JournalLineID string `pathParam:"style=simple,explode=false,name=JournalLineId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetTagFromJournalLineHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagFromJournalLineRequest struct {
    PathParams GetTagFromJournalLinePathParams 
    Headers GetTagFromJournalLineHeaders 
    
}

type GetTagFromJournalLineResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

