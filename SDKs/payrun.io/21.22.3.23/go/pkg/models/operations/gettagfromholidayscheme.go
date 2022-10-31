package operations

import (
"openapi/pkg/models/shared")

type GetTagFromHolidaySchemePathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetTagFromHolidaySchemeHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagFromHolidaySchemeRequest struct {
    PathParams GetTagFromHolidaySchemePathParams 
    Headers GetTagFromHolidaySchemeHeaders 
    
}

type GetTagFromHolidaySchemeResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

