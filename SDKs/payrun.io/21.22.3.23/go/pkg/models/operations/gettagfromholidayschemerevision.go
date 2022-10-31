package operations

import (
"time"
"openapi/pkg/models/shared")

type GetTagFromHolidaySchemeRevisionPathParams struct {
    EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetTagFromHolidaySchemeRevisionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagFromHolidaySchemeRevisionRequest struct {
    PathParams GetTagFromHolidaySchemeRevisionPathParams 
    Headers GetTagFromHolidaySchemeRevisionHeaders 
    
}

type GetTagFromHolidaySchemeRevisionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

