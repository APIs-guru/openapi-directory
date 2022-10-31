package operations

import (
"openapi/pkg/models/shared")

type EndpointGetSeveralTracksQueryParams struct {
    Ids string `queryParam:"style=form,explode=true,name=ids"`
    Market *string `queryParam:"style=form,explode=true,name=market"`
    
}

type EndpointGetSeveralTracksHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetSeveralTracksSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetSeveralTracksRequest struct {
    QueryParams EndpointGetSeveralTracksQueryParams 
    Headers EndpointGetSeveralTracksHeaders 
    Security EndpointGetSeveralTracksSecurity 
    
}

type EndpointGetSeveralTracksResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    TracksObject *shared.TracksObject 
    
}

