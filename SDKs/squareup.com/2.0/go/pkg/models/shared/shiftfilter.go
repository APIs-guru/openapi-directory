package shared

type ShiftFilter struct {
	EmployeeIds   []string      `json:"employee_ids"`
	End           *TimeRange    `json:"end"`
	LocationIds   []string      `json:"location_ids"`
	Start         *TimeRange    `json:"start"`
	Status        *string       `json:"status"`
	TeamMemberIds []string      `json:"team_member_ids"`
	Workday       *ShiftWorkday `json:"workday"`
}
