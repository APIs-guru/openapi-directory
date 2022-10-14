package shared

type RetrieveTeamMemberResponse struct {
	Errors     []Error     `json:"errors,omitempty"`
	TeamMember *TeamMember `json:"team_member,omitempty"`
}
