package operations

import (
"openapi/pkg/models/shared")

type EndpointGetTrackPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EndpointGetTrackQueryParams struct {
    Market *string `queryParam:"style=form,explode=true,name=market"`
    
}

type EndpointGetTrackHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetTrackSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetTrackRequest struct {
    PathParams EndpointGetTrackPathParams 
    QueryParams EndpointGetTrackQueryParams 
    Headers EndpointGetTrackHeaders 
    Security EndpointGetTrackSecurity 
    
}

type EndpointGetTrackResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    TrackObject *shared.TrackObject 
    
}

