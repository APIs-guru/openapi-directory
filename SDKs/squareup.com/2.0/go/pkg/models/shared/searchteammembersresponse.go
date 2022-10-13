package shared

type SearchTeamMembersResponse struct {
	Cursor      *string      `json:"cursor"`
	Errors      []Error      `json:"errors"`
	TeamMembers []TeamMember `json:"team_members"`
}
