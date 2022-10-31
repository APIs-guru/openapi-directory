package shared

type UpdateTeamMemberResponse struct {
	Errors     []Error     `json:"errors,omitempty"`
	TeamMember *TeamMember `json:"team_member,omitempty"`
}
