package shared

type DataSourceEntityID struct {
	EntityID   *string             `json:"entity_id"`
	EntityType *DataSourceTypeEnum `json:"entity_type"`
}
