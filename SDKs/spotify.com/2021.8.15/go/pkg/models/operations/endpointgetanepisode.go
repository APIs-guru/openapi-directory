package operations

import (
"openapi/pkg/models/shared")

type EndpointGetAnEpisodePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EndpointGetAnEpisodeQueryParams struct {
    Market *string `queryParam:"style=form,explode=true,name=market"`
    
}

type EndpointGetAnEpisodeHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetAnEpisodeSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetAnEpisodeRequest struct {
    PathParams EndpointGetAnEpisodePathParams 
    QueryParams EndpointGetAnEpisodeQueryParams 
    Headers EndpointGetAnEpisodeHeaders 
    Security EndpointGetAnEpisodeSecurity 
    
}

type EndpointGetAnEpisodeResponse struct {
    ContentType string 
    EpisodeObject *shared.EpisodeObject 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

