package operations

import (
"openapi/pkg/models/shared")

type GamesYoutubeReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GamesYoutubeReadRequest struct {
    PathParams GamesYoutubeReadPathParams 
    
}

type GamesYoutubeReadResponse struct {
    ContentType string 
    StatusCode int64 
    Youtube *shared.Youtube 
    
}

