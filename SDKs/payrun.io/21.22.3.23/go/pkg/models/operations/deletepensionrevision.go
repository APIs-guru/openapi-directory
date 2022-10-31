package operations

import (
"time"
"openapi/pkg/models/shared")

type DeletePensionRevisionPathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PensionID string `pathParam:"style=simple,explode=false,name=PensionId"`
    
}

type DeletePensionRevisionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeletePensionRevisionRequest struct {
    PathParams DeletePensionRevisionPathParams 
    Headers DeletePensionRevisionHeaders 
    
}

type DeletePensionRevisionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

