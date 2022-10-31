package operations

import (
"openapi/pkg/models/shared")

type GetPayCodeRevisionsPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PayCodeID string `pathParam:"style=simple,explode=false,name=PayCodeId"`
    
}

type GetPayCodeRevisionsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayCodeRevisionsRequest struct {
    PathParams GetPayCodeRevisionsPathParams 
    Headers GetPayCodeRevisionsHeaders 
    
}

type GetPayCodeRevisionsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

