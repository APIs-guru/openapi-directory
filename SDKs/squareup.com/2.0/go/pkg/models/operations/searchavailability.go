package operations

import (
"openapi/pkg/models/shared")

type SearchAvailabilitySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchAvailabilityRequest struct {
    Request shared.SearchAvailabilityRequest `request:"mediaType=application/json"`
    Security SearchAvailabilitySecurity 
    
}

type SearchAvailabilityResponse struct {
    ContentType string 
    SearchAvailabilityResponse *shared.SearchAvailabilityResponse 
    StatusCode int64 
    
}

