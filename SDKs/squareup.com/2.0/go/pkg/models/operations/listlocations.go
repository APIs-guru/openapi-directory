package operations

import (
"openapi/pkg/models/shared")

type ListLocationsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListLocationsRequest struct {
    Security ListLocationsSecurity 
    
}

type ListLocationsResponse struct {
    ContentType string 
    ListLocationsResponse *shared.ListLocationsResponse 
    StatusCode int64 
    
}

