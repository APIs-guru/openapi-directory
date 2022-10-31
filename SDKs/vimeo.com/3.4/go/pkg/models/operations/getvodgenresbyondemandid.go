package operations

import (
"openapi/pkg/models/shared")

type GetVodGenresByOndemandIDPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type GetVodGenresByOndemandIDRequest struct {
    PathParams GetVodGenresByOndemandIDPathParams 
    
}

type GetVodGenresByOndemandIDResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandGenres []shared.OnDemandGenre 
    
}

