package shared



type SearchTeamMembersFilter struct {
    LocationIds []string `json:"location_ids,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

