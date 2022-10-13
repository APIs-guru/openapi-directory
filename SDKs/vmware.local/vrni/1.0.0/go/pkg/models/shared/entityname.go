package shared

type EntityName struct {
	EntityID   *string         `json:"entity_id"`
	EntityType *EntityTypeEnum `json:"entity_type"`
	Name       *string         `json:"name"`
	Time       *int64          `json:"time"`
}
