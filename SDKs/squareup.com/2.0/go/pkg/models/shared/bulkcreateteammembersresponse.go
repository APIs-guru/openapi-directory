package shared

type BulkCreateTeamMembersResponse struct {
	Errors      []Error                             `json:"errors"`
	TeamMembers map[string]CreateTeamMemberResponse `json:"team_members"`
}
