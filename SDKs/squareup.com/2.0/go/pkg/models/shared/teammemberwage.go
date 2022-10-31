package shared



type TeamMemberWage struct {
    HourlyRate *Money `json:"hourly_rate,omitempty"`
    ID *string `json:"id,omitempty"`
    TeamMemberID *string `json:"team_member_id,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

