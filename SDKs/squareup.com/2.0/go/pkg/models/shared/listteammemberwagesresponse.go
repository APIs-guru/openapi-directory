package shared

type ListTeamMemberWagesResponse struct {
	Cursor          *string          `json:"cursor,omitempty"`
	Errors          []Error          `json:"errors,omitempty"`
	TeamMemberWages []TeamMemberWage `json:"team_member_wages,omitempty"`
}
