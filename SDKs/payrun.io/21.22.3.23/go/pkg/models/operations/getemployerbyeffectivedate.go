package operations

import (
"time"
"openapi/pkg/models/shared")

type GetEmployerByEffectiveDatePathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetEmployerByEffectiveDateHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetEmployerByEffectiveDateRequest struct {
    PathParams GetEmployerByEffectiveDatePathParams 
    Headers GetEmployerByEffectiveDateHeaders 
    
}

type GetEmployerByEffectiveDateResponse struct {
    ContentType string 
    Employer *shared.Employer 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

