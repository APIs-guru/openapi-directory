package shared



type SearchMembershipCriteria struct {
    EntityType *AllEntityTypeEnum `json:"entity_type,omitempty"`
    Filter *string `json:"filter,omitempty"`
    
}

