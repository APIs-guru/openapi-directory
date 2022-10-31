package operations

import (
"openapi/pkg/models/shared")

type CreateBreakTypeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateBreakTypeRequest struct {
    Request shared.CreateBreakTypeRequest `request:"mediaType=application/json"`
    Security CreateBreakTypeSecurity 
    
}

type CreateBreakTypeResponse struct {
    ContentType string 
    CreateBreakTypeResponse *shared.CreateBreakTypeResponse 
    StatusCode int64 
    
}

