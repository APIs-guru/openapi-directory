package operations

import (
"openapi/pkg/models/shared")

type PutCalendarsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutCalendarsIDRequest struct {
    PathParams PutCalendarsIDPathParams 
    Request shared.Calendar `request:"mediaType=application/json"`
    
}

type PutCalendarsIDResponse struct {
    Calendar *shared.Calendar 
    ContentType string 
    StatusCode int64 
    
}

