package operations

import (
"openapi/pkg/models/shared")

type GamesReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GamesReadRequest struct {
    PathParams GamesReadPathParams 
    
}

type GamesReadResponse struct {
    ContentType string 
    GameSingle *shared.GameSingle 
    StatusCode int64 
    
}

