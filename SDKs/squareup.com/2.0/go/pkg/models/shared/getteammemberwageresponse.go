package shared

type GetTeamMemberWageResponse struct {
	Errors         []Error         `json:"errors"`
	TeamMemberWage *TeamMemberWage `json:"team_member_wage"`
}
