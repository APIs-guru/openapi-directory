package operations

import (
"openapi/pkg/models/shared")

type GetHolidaySchemesWithTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetHolidaySchemesWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetHolidaySchemesWithTagRequest struct {
    PathParams GetHolidaySchemesWithTagPathParams 
    Headers GetHolidaySchemesWithTagHeaders 
    
}

type GetHolidaySchemesWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

