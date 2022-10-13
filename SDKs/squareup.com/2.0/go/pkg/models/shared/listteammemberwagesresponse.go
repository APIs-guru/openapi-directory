package shared

type ListTeamMemberWagesResponse struct {
	Cursor          *string          `json:"cursor"`
	Errors          []Error          `json:"errors"`
	TeamMemberWages []TeamMemberWage `json:"team_member_wages"`
}
