package shared

type EntityIDWithTime struct {
	EntityID   *string         `json:"entity_id"`
	EntityType *EntityTypeEnum `json:"entity_type"`
	Time       *int64          `json:"time"`
}
