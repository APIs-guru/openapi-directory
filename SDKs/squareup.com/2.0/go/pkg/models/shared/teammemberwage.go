package shared

type TeamMemberWage struct {
	HourlyRate   *Money  `json:"hourly_rate"`
	ID           *string `json:"id"`
	TeamMemberID *string `json:"team_member_id"`
	Title        *string `json:"title"`
}
