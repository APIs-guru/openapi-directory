package operations

import (
"openapi/pkg/models/shared")

type RetrieveLocationPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type RetrieveLocationSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveLocationRequest struct {
    PathParams RetrieveLocationPathParams 
    Security RetrieveLocationSecurity 
    
}

type RetrieveLocationResponse struct {
    ContentType string 
    RetrieveLocationResponse *shared.RetrieveLocationResponse 
    StatusCode int64 
    
}

