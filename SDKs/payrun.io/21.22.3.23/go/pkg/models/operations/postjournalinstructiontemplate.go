package operations

import (
"openapi/pkg/models/shared")

type PostJournalInstructionTemplateHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostJournalInstructionTemplateRequest struct {
    Headers PostJournalInstructionTemplateHeaders 
    
}

type PostJournalInstructionTemplateResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

