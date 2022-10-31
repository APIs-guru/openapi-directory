package operations

import (
"openapi/pkg/models/shared")

type PatchPensionPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PensionID string `pathParam:"style=simple,explode=false,name=PensionId"`
    
}

type PatchPensionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PatchPensionRequest struct {
    PathParams PatchPensionPathParams 
    Headers PatchPensionHeaders 
    Request shared.Pension `request:"mediaType=application/json"`
    
}

type PatchPensionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Pension *shared.Pension 
    StatusCode int64 
    
}

