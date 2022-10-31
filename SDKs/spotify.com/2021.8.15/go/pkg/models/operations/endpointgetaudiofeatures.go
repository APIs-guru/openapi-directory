package operations

import (
"openapi/pkg/models/shared")

type EndpointGetAudioFeaturesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EndpointGetAudioFeaturesHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetAudioFeaturesSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetAudioFeaturesRequest struct {
    PathParams EndpointGetAudioFeaturesPathParams 
    Headers EndpointGetAudioFeaturesHeaders 
    Security EndpointGetAudioFeaturesSecurity 
    
}

type EndpointGetAudioFeaturesResponse struct {
    AudioFeaturesObject *shared.AudioFeaturesObject 
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

