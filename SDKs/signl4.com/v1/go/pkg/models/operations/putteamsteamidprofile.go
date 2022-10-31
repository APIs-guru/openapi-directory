package operations

import (
"openapi/pkg/models/shared")

type PutTeamsTeamIDProfilePathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type PutTeamsTeamIDProfileRequests struct {
    TeamProfile *shared.TeamProfile `request:"mediaType=application/*+json"`
    TeamProfile1 *shared.TeamProfile `request:"mediaType=application/json"`
    TeamProfile2 *shared.TeamProfile `request:"mediaType=application/json-patch+json"`
    TeamProfile3 *shared.TeamProfile `request:"mediaType=text/json"`
    
}

type PutTeamsTeamIDProfileRequest struct {
    PathParams PutTeamsTeamIDProfilePathParams 
    Request *PutTeamsTeamIDProfileRequests 
    
}

type PutTeamsTeamIDProfileResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    TeamInfo *shared.TeamInfo 
    
}

