package shared



type BulkUpdateTeamMembersRequest struct {
    TeamMembers map[string]UpdateTeamMemberRequest `json:"team_members"`
    
}

