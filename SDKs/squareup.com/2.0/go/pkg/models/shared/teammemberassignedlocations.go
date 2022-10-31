package shared



type TeamMemberAssignedLocations struct {
    AssignmentType *string `json:"assignment_type,omitempty"`
    LocationIds []string `json:"location_ids,omitempty"`
    
}

