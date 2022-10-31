package operations

import (
"openapi/pkg/models/shared")

type GetHolidaySchemeFromEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
    
}

type GetHolidaySchemeFromEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetHolidaySchemeFromEmployerRequest struct {
    PathParams GetHolidaySchemeFromEmployerPathParams 
    Headers GetHolidaySchemeFromEmployerHeaders 
    
}

type GetHolidaySchemeFromEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    HolidayScheme *shared.HolidayScheme 
    StatusCode int64 
    
}

