package operations

import (
"openapi/pkg/models/shared")

type UpdateShiftPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateShiftSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateShiftRequest struct {
    PathParams UpdateShiftPathParams 
    Request shared.UpdateShiftRequest `request:"mediaType=application/json"`
    Security UpdateShiftSecurity 
    
}

type UpdateShiftResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateShiftResponse *shared.UpdateShiftResponse 
    
}

