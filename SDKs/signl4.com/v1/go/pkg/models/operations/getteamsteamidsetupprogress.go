package operations

import (
"openapi/pkg/models/shared")

type GetTeamsTeamIDSetupProgressPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetTeamsTeamIDSetupProgressRequest struct {
    PathParams GetTeamsTeamIDSetupProgressPathParams 
    
}

type GetTeamsTeamIDSetupProgressResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    TeamSetupProgress *shared.TeamSetupProgress 
    
}

