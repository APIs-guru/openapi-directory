package operations

import (
"openapi/pkg/models/shared")

type GamesMoviesReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GamesMoviesReadRequest struct {
    PathParams GamesMoviesReadPathParams 
    
}

type GamesMoviesReadResponse struct {
    ContentType string 
    Movie *shared.Movie 
    StatusCode int64 
    
}

