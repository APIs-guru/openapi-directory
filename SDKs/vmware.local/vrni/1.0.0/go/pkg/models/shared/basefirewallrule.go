package shared

type BaseFirewallRule struct {
	Action               *FirewallActionEnum `json:"action"`
	DestinationAny       *bool               `json:"destination_any"`
	DestinationInversion *bool               `json:"destination_inversion"`
	Destinations         []Reference         `json:"destinations"`
	Disabled             *bool               `json:"disabled"`
	EntityID             *string             `json:"entity_id"`
	EntityType           *EntityTypeEnum     `json:"entity_type"`
	Name                 *string             `json:"name"`
	PortRanges           []PortRange         `json:"port_ranges"`
	RuleID               *string             `json:"rule_id"`
	SectionID            *string             `json:"section_id"`
	SectionName          *string             `json:"section_name"`
	SequenceNumber       *int64              `json:"sequence_number"`
	ServiceAny           *bool               `json:"service_any"`
	Services             []Reference         `json:"services"`
	SourceAny            *bool               `json:"source_any"`
	SourceInversion      *bool               `json:"source_inversion"`
	Sources              []Reference         `json:"sources"`
}
