package operations

import (
"openapi/pkg/models/shared")

type RetrieveBusinessBookingProfileSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveBusinessBookingProfileRequest struct {
    Security RetrieveBusinessBookingProfileSecurity 
    
}

type RetrieveBusinessBookingProfileResponse struct {
    ContentType string 
    RetrieveBusinessBookingProfileResponse *shared.RetrieveBusinessBookingProfileResponse 
    StatusCode int64 
    
}

