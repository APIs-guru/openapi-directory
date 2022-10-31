package shared

type EntityName struct {
	EntityID   *string         `json:"entity_id,omitempty"`
	EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
	Name       *string         `json:"name,omitempty"`
	Time       *int64          `json:"time,omitempty"`
}
