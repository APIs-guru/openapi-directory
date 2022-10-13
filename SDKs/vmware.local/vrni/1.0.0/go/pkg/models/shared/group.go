package shared

type Group struct {
	EntityID   *string         `json:"entity_id"`
	EntityType *EntityTypeEnum `json:"entity_type"`
	Members    []Reference     `json:"members"`
	Name       *string         `json:"name"`
}
