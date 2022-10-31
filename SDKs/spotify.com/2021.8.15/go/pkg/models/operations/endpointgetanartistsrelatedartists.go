package operations

import (
"openapi/pkg/models/shared")

type EndpointGetAnArtistsRelatedArtistsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EndpointGetAnArtistsRelatedArtistsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetAnArtistsRelatedArtistsSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetAnArtistsRelatedArtistsRequest struct {
    PathParams EndpointGetAnArtistsRelatedArtistsPathParams 
    Headers EndpointGetAnArtistsRelatedArtistsHeaders 
    Security EndpointGetAnArtistsRelatedArtistsSecurity 
    
}

type EndpointGetAnArtistsRelatedArtistsResponse struct {
    ArtistsObject *shared.ArtistsObject 
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

