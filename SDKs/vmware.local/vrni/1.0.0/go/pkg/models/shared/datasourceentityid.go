package shared



type DataSourceEntityID struct {
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *DataSourceTypeEnum `json:"entity_type,omitempty"`
    
}

