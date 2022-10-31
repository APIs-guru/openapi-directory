package operations

import (
"openapi/pkg/models/shared")

type DeleteHolidaySchemePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
    
}

type DeleteHolidaySchemeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteHolidaySchemeRequest struct {
    PathParams DeleteHolidaySchemePathParams 
    Headers DeleteHolidaySchemeHeaders 
    
}

type DeleteHolidaySchemeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

