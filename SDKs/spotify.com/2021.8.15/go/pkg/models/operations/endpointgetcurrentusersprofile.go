package operations

import (
"openapi/pkg/models/shared")

type EndpointGetCurrentUsersProfileHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetCurrentUsersProfileSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetCurrentUsersProfileRequest struct {
    Headers EndpointGetCurrentUsersProfileHeaders 
    Security EndpointGetCurrentUsersProfileSecurity 
    
}

type EndpointGetCurrentUsersProfileResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    PrivateUserObject *shared.PrivateUserObject 
    StatusCode int64 
    
}

