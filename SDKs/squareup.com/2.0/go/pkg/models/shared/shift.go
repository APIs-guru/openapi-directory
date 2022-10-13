package shared

type Shift struct {
	Breaks       []Break    `json:"breaks"`
	CreatedAt    *string    `json:"created_at"`
	EmployeeID   *string    `json:"employee_id"`
	EndAt        *string    `json:"end_at"`
	ID           *string    `json:"id"`
	LocationID   *string    `json:"location_id"`
	StartAt      string     `json:"start_at"`
	Status       *string    `json:"status"`
	TeamMemberID *string    `json:"team_member_id"`
	Timezone     *string    `json:"timezone"`
	UpdatedAt    *string    `json:"updated_at"`
	Version      *int64     `json:"version"`
	Wage         *ShiftWage `json:"wage"`
}
