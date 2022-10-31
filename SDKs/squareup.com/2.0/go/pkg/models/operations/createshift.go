package operations

import (
"openapi/pkg/models/shared")

type CreateShiftSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateShiftRequest struct {
    Request shared.CreateShiftRequest `request:"mediaType=application/json"`
    Security CreateShiftSecurity 
    
}

type CreateShiftResponse struct {
    ContentType string 
    CreateShiftResponse *shared.CreateShiftResponse 
    StatusCode int64 
    
}

