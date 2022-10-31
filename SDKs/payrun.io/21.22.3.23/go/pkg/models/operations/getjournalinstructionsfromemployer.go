package operations

import (
"openapi/pkg/models/shared")

type GetJournalInstructionsFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetJournalInstructionsFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetJournalInstructionsFromEmployerRequest struct {
    PathParams GetJournalInstructionsFromEmployerPathParams 
    Headers GetJournalInstructionsFromEmployerHeaders 
    
}

type GetJournalInstructionsFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

