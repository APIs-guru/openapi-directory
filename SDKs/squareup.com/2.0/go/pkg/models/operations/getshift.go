package operations

import (
"openapi/pkg/models/shared")

type GetShiftPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetShiftSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetShiftRequest struct {
    PathParams GetShiftPathParams 
    Security GetShiftSecurity 
    
}

type GetShiftResponse struct {
    ContentType string 
    GetShiftResponse *shared.GetShiftResponse 
    StatusCode int64 
    
}

