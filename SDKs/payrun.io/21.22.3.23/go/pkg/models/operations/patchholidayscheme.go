package operations

import (
"openapi/pkg/models/shared")

type PatchHolidaySchemePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
    
}

type PatchHolidaySchemeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PatchHolidaySchemeRequest struct {
    PathParams PatchHolidaySchemePathParams 
    Headers PatchHolidaySchemeHeaders 
    Request shared.HolidayScheme `request:"mediaType=application/json"`
    
}

type PatchHolidaySchemeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    HolidayScheme *shared.HolidayScheme 
    StatusCode int64 
    
}

