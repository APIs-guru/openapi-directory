package shared

type BulkCreateTeamMembersRequest struct {
	TeamMembers map[string]CreateTeamMemberRequest `json:"team_members"`
}
