package operations

import (
"time"
"openapi/pkg/models/shared")

type GetHolidaySchemesByEffectiveDatePathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetHolidaySchemesByEffectiveDateHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetHolidaySchemesByEffectiveDateRequest struct {
    PathParams GetHolidaySchemesByEffectiveDatePathParams 
    Headers GetHolidaySchemesByEffectiveDateHeaders 
    
}

type GetHolidaySchemesByEffectiveDateResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

