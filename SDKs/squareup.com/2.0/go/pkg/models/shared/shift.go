package shared

type Shift struct {
	Breaks       []Break    `json:"breaks,omitempty"`
	CreatedAt    *string    `json:"created_at,omitempty"`
	EmployeeID   *string    `json:"employee_id,omitempty"`
	EndAt        *string    `json:"end_at,omitempty"`
	ID           *string    `json:"id,omitempty"`
	LocationID   *string    `json:"location_id,omitempty"`
	StartAt      string     `json:"start_at"`
	Status       *string    `json:"status,omitempty"`
	TeamMemberID *string    `json:"team_member_id,omitempty"`
	Timezone     *string    `json:"timezone,omitempty"`
	UpdatedAt    *string    `json:"updated_at,omitempty"`
	Version      *int64     `json:"version,omitempty"`
	Wage         *ShiftWage `json:"wage,omitempty"`
}
