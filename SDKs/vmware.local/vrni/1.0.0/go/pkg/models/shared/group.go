package shared



type Group struct {
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    Members []Reference `json:"members,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

