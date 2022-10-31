package operations

import (
"openapi/pkg/models/shared")

type PutHolidaySchemeIntoEmployerPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
    
}

type PutHolidaySchemeIntoEmployerHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutHolidaySchemeIntoEmployerRequest struct {
    PathParams PutHolidaySchemeIntoEmployerPathParams 
    Headers PutHolidaySchemeIntoEmployerHeaders 
    Request shared.HolidayScheme `request:"mediaType=application/json"`
    
}

type PutHolidaySchemeIntoEmployerResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    HolidayScheme *shared.HolidayScheme 
    StatusCode int64 
    
}

