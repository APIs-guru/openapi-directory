package shared



type BaseEntity struct {
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

