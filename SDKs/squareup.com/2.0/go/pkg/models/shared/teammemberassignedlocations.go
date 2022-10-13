package shared

type TeamMemberAssignedLocations struct {
	AssignmentType *string  `json:"assignment_type"`
	LocationIds    []string `json:"location_ids"`
}
