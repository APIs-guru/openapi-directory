package operations

import (
"openapi/pkg/models/shared")

type GetTeamsTeamIDMembershipsPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetTeamsTeamIDMembershipsRequest struct {
    PathParams GetTeamsTeamIDMembershipsPathParams 
    
}

type GetTeamsTeamIDMembershipsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    InvitedUserInfos []shared.InvitedUserInfo 
    StatusCode int64 
    
}

