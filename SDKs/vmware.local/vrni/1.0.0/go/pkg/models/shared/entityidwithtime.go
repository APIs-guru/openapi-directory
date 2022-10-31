package shared



type EntityIDWithTime struct {
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    Time *int64 `json:"time,omitempty"`
    
}

