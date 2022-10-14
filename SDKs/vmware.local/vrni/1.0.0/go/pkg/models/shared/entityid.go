package shared

type EntityID struct {
	EntityID   *string         `json:"entity_id,omitempty"`
	EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
}
