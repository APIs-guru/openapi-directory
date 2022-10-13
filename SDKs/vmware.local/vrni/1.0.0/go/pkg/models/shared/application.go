package shared

type Application struct {
	CreateTime       *int64          `json:"create_time"`
	CreatedBy        *string         `json:"created_by"`
	EntityID         *string         `json:"entity_id"`
	EntityType       *EntityTypeEnum `json:"entity_type"`
	LastModifiedBy   *string         `json:"last_modified_by"`
	LastModifiedTime *int64          `json:"last_modified_time"`
	Name             *string         `json:"name"`
}
