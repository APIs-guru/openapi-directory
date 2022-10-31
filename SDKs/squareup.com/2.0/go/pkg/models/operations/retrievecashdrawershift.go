package operations

import (
"openapi/pkg/models/shared")

type RetrieveCashDrawerShiftPathParams struct {
    ShiftID string `pathParam:"style=simple,explode=false,name=shift_id"`
    
}

type RetrieveCashDrawerShiftQueryParams struct {
    LocationID string `queryParam:"style=form,explode=true,name=location_id"`
    
}

type RetrieveCashDrawerShiftSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveCashDrawerShiftRequest struct {
    PathParams RetrieveCashDrawerShiftPathParams 
    QueryParams RetrieveCashDrawerShiftQueryParams 
    Security RetrieveCashDrawerShiftSecurity 
    
}

type RetrieveCashDrawerShiftResponse struct {
    ContentType string 
    RetrieveCashDrawerShiftResponse *shared.RetrieveCashDrawerShiftResponse 
    StatusCode int64 
    
}

