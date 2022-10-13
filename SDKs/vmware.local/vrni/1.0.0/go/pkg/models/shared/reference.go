package shared

type Reference struct {
	EntityID   *string         `json:"entity_id"`
	EntityType *EntityTypeEnum `json:"entity_type"`
}
