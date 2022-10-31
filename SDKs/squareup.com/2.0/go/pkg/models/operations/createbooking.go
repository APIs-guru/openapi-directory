package operations

import (
"openapi/pkg/models/shared")

type CreateBookingSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateBookingRequest struct {
    Request shared.CreateBookingRequest `request:"mediaType=application/json"`
    Security CreateBookingSecurity 
    
}

type CreateBookingResponse struct {
    ContentType string 
    CreateBookingResponse *shared.CreateBookingResponse 
    StatusCode int64 
    
}

