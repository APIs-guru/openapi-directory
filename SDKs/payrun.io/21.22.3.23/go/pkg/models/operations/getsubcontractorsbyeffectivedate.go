package operations

import (
"time"
"openapi/pkg/models/shared")

type GetSubContractorsByEffectiveDatePathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetSubContractorsByEffectiveDateHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetSubContractorsByEffectiveDateRequest struct {
    PathParams GetSubContractorsByEffectiveDatePathParams 
    Headers GetSubContractorsByEffectiveDateHeaders 
    
}

type GetSubContractorsByEffectiveDateResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

