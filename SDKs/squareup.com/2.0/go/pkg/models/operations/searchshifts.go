package operations

import (
"openapi/pkg/models/shared")

type SearchShiftsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchShiftsRequest struct {
    Request shared.SearchShiftsRequest `request:"mediaType=application/json"`
    Security SearchShiftsSecurity 
    
}

type SearchShiftsResponse struct {
    ContentType string 
    SearchShiftsResponse *shared.SearchShiftsResponse 
    StatusCode int64 
    
}

