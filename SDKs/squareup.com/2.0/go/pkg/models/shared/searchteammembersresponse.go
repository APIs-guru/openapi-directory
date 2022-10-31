package shared

type SearchTeamMembersResponse struct {
	Cursor      *string      `json:"cursor,omitempty"`
	Errors      []Error      `json:"errors,omitempty"`
	TeamMembers []TeamMember `json:"team_members,omitempty"`
}
