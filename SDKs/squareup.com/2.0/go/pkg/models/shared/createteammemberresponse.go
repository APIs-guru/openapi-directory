package shared

type CreateTeamMemberResponse struct {
	Errors     []Error     `json:"errors"`
	TeamMember *TeamMember `json:"team_member"`
}
