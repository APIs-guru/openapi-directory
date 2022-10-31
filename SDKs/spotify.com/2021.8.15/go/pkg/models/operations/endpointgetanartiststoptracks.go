package operations

import (
"openapi/pkg/models/shared")

type EndpointGetAnArtistsTopTracksPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EndpointGetAnArtistsTopTracksQueryParams struct {
    Market string `queryParam:"style=form,explode=true,name=market"`
    
}

type EndpointGetAnArtistsTopTracksHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetAnArtistsTopTracksSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetAnArtistsTopTracksRequest struct {
    PathParams EndpointGetAnArtistsTopTracksPathParams 
    QueryParams EndpointGetAnArtistsTopTracksQueryParams 
    Headers EndpointGetAnArtistsTopTracksHeaders 
    Security EndpointGetAnArtistsTopTracksSecurity 
    
}

type EndpointGetAnArtistsTopTracksResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    TracksObject *shared.TracksObject 
    
}

