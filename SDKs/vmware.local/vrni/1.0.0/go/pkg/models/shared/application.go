package shared

type Application struct {
	CreateTime       *int64          `json:"create_time,omitempty"`
	CreatedBy        *string         `json:"created_by,omitempty"`
	EntityID         *string         `json:"entity_id,omitempty"`
	EntityType       *EntityTypeEnum `json:"entity_type,omitempty"`
	LastModifiedBy   *string         `json:"last_modified_by,omitempty"`
	LastModifiedTime *int64          `json:"last_modified_time,omitempty"`
	Name             *string         `json:"name,omitempty"`
}
