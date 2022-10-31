package shared



type BulkCreateTeamMembersResponse struct {
    Errors []Error `json:"errors,omitempty"`
    TeamMembers map[string]CreateTeamMemberResponse `json:"team_members,omitempty"`
    
}

