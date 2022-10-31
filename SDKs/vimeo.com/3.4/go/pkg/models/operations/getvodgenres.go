package operations

import (
"openapi/pkg/models/shared")

type GetVodGenresResponse struct {
    ContentType string 
    StatusCode int64 
    OnDemandGenres []shared.OnDemandGenre 
    
}

