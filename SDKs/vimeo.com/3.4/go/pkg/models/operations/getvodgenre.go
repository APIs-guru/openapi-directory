package operations

import (
"openapi/pkg/models/shared")

type GetVodGenrePathParams struct {
    GenreID string `pathParam:"style=simple,explode=false,name=genre_id"`
    
}

type GetVodGenreRequest struct {
    PathParams GetVodGenrePathParams 
    
}

type GetVodGenreResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandGenre *shared.OnDemandGenre 
    
}

