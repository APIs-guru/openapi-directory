package operations

import (
"time"
"openapi/pkg/models/shared")

type GetPensionByEffectiveDatePathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    PensionID string `pathParam:"style=simple,explode=false,name=PensionId"`
    
}

type GetPensionByEffectiveDateHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPensionByEffectiveDateRequest struct {
    PathParams GetPensionByEffectiveDatePathParams 
    Headers GetPensionByEffectiveDateHeaders 
    
}

type GetPensionByEffectiveDateResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Pension *shared.Pension 
    StatusCode int64 
    
}

