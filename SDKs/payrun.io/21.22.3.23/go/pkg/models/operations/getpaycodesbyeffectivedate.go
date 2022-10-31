package operations

import (
"time"
"openapi/pkg/models/shared")

type GetPayCodesByEffectiveDatePathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetPayCodesByEffectiveDateHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPayCodesByEffectiveDateRequest struct {
    PathParams GetPayCodesByEffectiveDatePathParams 
    Headers GetPayCodesByEffectiveDateHeaders 
    
}

type GetPayCodesByEffectiveDateResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

