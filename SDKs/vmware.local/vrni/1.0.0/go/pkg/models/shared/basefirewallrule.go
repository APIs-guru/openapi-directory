package shared



type BaseFirewallRule struct {
    Action *FirewallActionEnum `json:"action,omitempty"`
    DestinationAny *bool `json:"destination_any,omitempty"`
    DestinationInversion *bool `json:"destination_inversion,omitempty"`
    Destinations []Reference `json:"destinations,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    Name *string `json:"name,omitempty"`
    PortRanges []PortRange `json:"port_ranges,omitempty"`
    RuleID *string `json:"rule_id,omitempty"`
    SectionID *string `json:"section_id,omitempty"`
    SectionName *string `json:"section_name,omitempty"`
    SequenceNumber *int64 `json:"sequence_number,omitempty"`
    ServiceAny *bool `json:"service_any,omitempty"`
    Services []Reference `json:"services,omitempty"`
    SourceAny *bool `json:"source_any,omitempty"`
    SourceInversion *bool `json:"source_inversion,omitempty"`
    Sources []Reference `json:"sources,omitempty"`
    
}

