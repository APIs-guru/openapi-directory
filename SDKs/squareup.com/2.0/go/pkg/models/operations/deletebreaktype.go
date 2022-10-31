package operations

import (
"openapi/pkg/models/shared")

type DeleteBreakTypePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteBreakTypeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteBreakTypeRequest struct {
    PathParams DeleteBreakTypePathParams 
    Security DeleteBreakTypeSecurity 
    
}

type DeleteBreakTypeResponse struct {
    ContentType string 
    DeleteBreakTypeResponse *shared.DeleteBreakTypeResponse 
    StatusCode int64 
    
}

