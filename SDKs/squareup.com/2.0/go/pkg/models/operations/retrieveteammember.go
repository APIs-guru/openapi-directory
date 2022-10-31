package operations

import (
"openapi/pkg/models/shared")

type RetrieveTeamMemberPathParams struct {
    TeamMemberID string `pathParam:"style=simple,explode=false,name=team_member_id"`
    
}

type RetrieveTeamMemberSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveTeamMemberRequest struct {
    PathParams RetrieveTeamMemberPathParams 
    Security RetrieveTeamMemberSecurity 
    
}

type RetrieveTeamMemberResponse struct {
    ContentType string 
    RetrieveTeamMemberResponse *shared.RetrieveTeamMemberResponse 
    StatusCode int64 
    
}

