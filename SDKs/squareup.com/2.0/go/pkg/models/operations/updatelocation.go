package operations

import (
"openapi/pkg/models/shared")

type UpdateLocationPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type UpdateLocationSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateLocationRequest struct {
    PathParams UpdateLocationPathParams 
    Request shared.UpdateLocationRequest `request:"mediaType=application/json"`
    Security UpdateLocationSecurity 
    
}

type UpdateLocationResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateLocationResponse *shared.UpdateLocationResponse 
    
}

