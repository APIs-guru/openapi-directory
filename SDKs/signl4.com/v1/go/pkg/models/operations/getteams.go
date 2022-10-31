package operations

import (
"openapi/pkg/models/shared")

type GetTeamsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    TeamInfos []shared.TeamInfo 
    
}

