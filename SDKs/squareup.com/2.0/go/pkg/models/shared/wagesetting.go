package shared

type WageSetting struct {
	CreatedAt        *string         `json:"created_at"`
	IsOvertimeExempt *bool           `json:"is_overtime_exempt"`
	JobAssignments   []JobAssignment `json:"job_assignments"`
	TeamMemberID     *string         `json:"team_member_id"`
	UpdatedAt        *string         `json:"updated_at"`
	Version          *int64          `json:"version"`
}
