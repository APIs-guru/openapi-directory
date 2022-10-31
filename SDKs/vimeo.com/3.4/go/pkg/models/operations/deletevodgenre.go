package operations

import (
"openapi/pkg/models/shared")

type DeleteVodGenrePathParams struct {
    GenreID string `pathParam:"style=simple,explode=false,name=genre_id"`
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type DeleteVodGenreSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVodGenreRequest struct {
    PathParams DeleteVodGenrePathParams 
    Security DeleteVodGenreSecurity 
    
}

type DeleteVodGenreResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

