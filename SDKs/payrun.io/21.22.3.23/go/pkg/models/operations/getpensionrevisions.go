package operations

import (
"openapi/pkg/models/shared")

type GetPensionRevisionsPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PensionID string `pathParam:"style=simple,explode=false,name=PensionId"`
    
}

type GetPensionRevisionsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPensionRevisionsRequest struct {
    PathParams GetPensionRevisionsPathParams 
    Headers GetPensionRevisionsHeaders 
    
}

type GetPensionRevisionsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

