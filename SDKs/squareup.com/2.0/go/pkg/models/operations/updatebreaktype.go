package operations

import (
"openapi/pkg/models/shared")

type UpdateBreakTypePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateBreakTypeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateBreakTypeRequest struct {
    PathParams UpdateBreakTypePathParams 
    Request shared.UpdateBreakTypeRequest `request:"mediaType=application/json"`
    Security UpdateBreakTypeSecurity 
    
}

type UpdateBreakTypeResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateBreakTypeResponse *shared.UpdateBreakTypeResponse 
    
}

