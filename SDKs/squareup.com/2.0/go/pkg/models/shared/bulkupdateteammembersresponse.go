package shared

type BulkUpdateTeamMembersResponse struct {
	Errors      []Error                             `json:"errors"`
	TeamMembers map[string]UpdateTeamMemberResponse `json:"team_members"`
}
