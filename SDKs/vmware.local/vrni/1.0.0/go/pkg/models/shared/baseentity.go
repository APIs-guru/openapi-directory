package shared

type BaseEntity struct {
	EntityID   *string         `json:"entity_id"`
	EntityType *EntityTypeEnum `json:"entity_type"`
	Name       *string         `json:"name"`
}
