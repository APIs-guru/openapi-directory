package shared

type GetTeamMemberWageResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	TeamMemberWage *TeamMemberWage `json:"team_member_wage,omitempty"`
}
