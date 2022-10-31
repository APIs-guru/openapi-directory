package shared

type WageSetting struct {
	CreatedAt        *string         `json:"created_at,omitempty"`
	IsOvertimeExempt *bool           `json:"is_overtime_exempt,omitempty"`
	JobAssignments   []JobAssignment `json:"job_assignments,omitempty"`
	TeamMemberID     *string         `json:"team_member_id,omitempty"`
	UpdatedAt        *string         `json:"updated_at,omitempty"`
	Version          *int64          `json:"version,omitempty"`
}
