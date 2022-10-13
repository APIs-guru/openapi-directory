package shared

type RetrieveTeamMemberResponse struct {
	Errors     []Error     `json:"errors"`
	TeamMember *TeamMember `json:"team_member"`
}
