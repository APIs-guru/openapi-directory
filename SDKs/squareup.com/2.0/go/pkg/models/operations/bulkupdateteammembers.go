package operations

import (
"openapi/pkg/models/shared")

type BulkUpdateTeamMembersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type BulkUpdateTeamMembersRequest struct {
    Request shared.BulkUpdateTeamMembersRequest `request:"mediaType=application/json"`
    Security BulkUpdateTeamMembersSecurity 
    
}

type BulkUpdateTeamMembersResponse struct {
    BulkUpdateTeamMembersResponse *shared.BulkUpdateTeamMembersResponse 
    ContentType string 
    StatusCode int64 
    
}

