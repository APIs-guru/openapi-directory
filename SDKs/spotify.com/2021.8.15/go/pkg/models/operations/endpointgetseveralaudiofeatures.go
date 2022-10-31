package operations

import (
"openapi/pkg/models/shared")

type EndpointGetSeveralAudioFeaturesQueryParams struct {
    Ids string `queryParam:"style=form,explode=true,name=ids"`
    
}

type EndpointGetSeveralAudioFeaturesHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetSeveralAudioFeaturesSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetSeveralAudioFeaturesRequest struct {
    QueryParams EndpointGetSeveralAudioFeaturesQueryParams 
    Headers EndpointGetSeveralAudioFeaturesHeaders 
    Security EndpointGetSeveralAudioFeaturesSecurity 
    
}

type EndpointGetSeveralAudioFeaturesResponse struct {
    AudioFeaturesArrayObject *shared.AudioFeaturesArrayObject 
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

