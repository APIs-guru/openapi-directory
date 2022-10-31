package operations

import (
"openapi/pkg/models/shared")

type ListCashDrawerShiftEventsPathParams struct {
    ShiftID string `pathParam:"style=simple,explode=false,name=shift_id"`
    
}

type ListCashDrawerShiftEventsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    LocationID string `queryParam:"style=form,explode=true,name=location_id"`
    
}

type ListCashDrawerShiftEventsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListCashDrawerShiftEventsRequest struct {
    PathParams ListCashDrawerShiftEventsPathParams 
    QueryParams ListCashDrawerShiftEventsQueryParams 
    Security ListCashDrawerShiftEventsSecurity 
    
}

type ListCashDrawerShiftEventsResponse struct {
    ContentType string 
    ListCashDrawerShiftEventsResponse *shared.ListCashDrawerShiftEventsResponse 
    StatusCode int64 
    
}

