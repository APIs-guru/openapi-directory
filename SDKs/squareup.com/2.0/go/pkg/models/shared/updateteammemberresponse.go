package shared

type UpdateTeamMemberResponse struct {
	Errors     []Error     `json:"errors"`
	TeamMember *TeamMember `json:"team_member"`
}
