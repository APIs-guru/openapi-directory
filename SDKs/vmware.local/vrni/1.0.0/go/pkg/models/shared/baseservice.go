package shared

type BaseService struct {
	EntityID   *string         `json:"entity_id"`
	EntityType *EntityTypeEnum `json:"entity_type"`
	Name       *string         `json:"name"`
	PortRanges []PortRange     `json:"port_ranges"`
	Protocol   *string         `json:"protocol"`
}
