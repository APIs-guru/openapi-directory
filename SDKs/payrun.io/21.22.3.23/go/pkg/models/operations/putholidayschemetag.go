package operations

import (
"openapi/pkg/models/shared")

type PutHolidaySchemeTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    HolidaySchemeID string `pathParam:"style=simple,explode=false,name=HolidaySchemeId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type PutHolidaySchemeTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutHolidaySchemeTagRequest struct {
    PathParams PutHolidaySchemeTagPathParams 
    Headers PutHolidaySchemeTagHeaders 
    
}

type PutHolidaySchemeTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

