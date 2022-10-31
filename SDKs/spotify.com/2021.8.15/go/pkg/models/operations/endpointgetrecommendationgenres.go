package operations

import (
"openapi/pkg/models/shared")

type EndpointGetRecommendationGenresHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetRecommendationGenresSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetRecommendationGenresRequest struct {
    Headers EndpointGetRecommendationGenresHeaders 
    Security EndpointGetRecommendationGenresSecurity 
    
}

type EndpointGetRecommendationGenresResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    GenreSeedsObject *shared.GenreSeedsObject 
    StatusCode int64 
    
}

