package shared



type BulkUpdateTeamMembersResponse struct {
    Errors []Error `json:"errors,omitempty"`
    TeamMembers map[string]UpdateTeamMemberResponse `json:"team_members,omitempty"`
    
}

