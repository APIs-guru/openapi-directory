package shared



type BaseService struct {
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    Name *string `json:"name,omitempty"`
    PortRanges []PortRange `json:"port_ranges,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    
}

