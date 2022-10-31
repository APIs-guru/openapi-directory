package operations

import (
"openapi/pkg/models/shared")

type EndpointGetAnArtistPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EndpointGetAnArtistHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetAnArtistSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetAnArtistRequest struct {
    PathParams EndpointGetAnArtistPathParams 
    Headers EndpointGetAnArtistHeaders 
    Security EndpointGetAnArtistSecurity 
    
}

type EndpointGetAnArtistResponse struct {
    ArtistObject *shared.ArtistObject 
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

