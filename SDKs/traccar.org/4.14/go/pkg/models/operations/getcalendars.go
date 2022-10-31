package operations

import (
"openapi/pkg/models/shared")

type GetCalendarsQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    UserID *int64 `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetCalendarsRequest struct {
    QueryParams GetCalendarsQueryParams 
    
}

type GetCalendarsResponse struct {
    Calendars []shared.Calendar 
    ContentType string 
    StatusCode int64 
    
}

