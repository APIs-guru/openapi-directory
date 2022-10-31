package operations

import (
"openapi/pkg/models/shared")

type EndpointGetAudioAnalysisPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EndpointGetAudioAnalysisHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetAudioAnalysisSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetAudioAnalysisRequest struct {
    PathParams EndpointGetAudioAnalysisPathParams 
    Headers EndpointGetAudioAnalysisHeaders 
    Security EndpointGetAudioAnalysisSecurity 
    
}

type EndpointGetAudioAnalysisResponse struct {
    AudioAnalysisObject *shared.AudioAnalysisObject 
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

