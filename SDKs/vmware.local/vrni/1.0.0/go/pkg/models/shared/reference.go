package shared

type Reference struct {
	EntityID   *string         `json:"entity_id,omitempty"`
	EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
}
