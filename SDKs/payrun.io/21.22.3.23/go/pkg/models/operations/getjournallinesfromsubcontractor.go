package operations

import (
"openapi/pkg/models/shared")

type GetJournalLinesFromSubContractorPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
    
}

type GetJournalLinesFromSubContractorHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetJournalLinesFromSubContractorRequest struct {
    PathParams GetJournalLinesFromSubContractorPathParams 
    Headers GetJournalLinesFromSubContractorHeaders 
    
}

type GetJournalLinesFromSubContractorResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

