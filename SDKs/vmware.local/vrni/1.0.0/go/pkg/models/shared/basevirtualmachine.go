package shared



type BaseVirtualMachine struct {
    DefaultGateway *string `json:"default_gateway,omitempty"`
    DestinationFirewallRules []RuleSet `json:"destination_firewall_rules,omitempty"`
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    IPAddresses []IPV4Address `json:"ip_addresses,omitempty"`
    IPSets []Reference `json:"ip_sets,omitempty"`
    Name *string `json:"name,omitempty"`
    SecurityGroups []Reference `json:"security_groups,omitempty"`
    SourceFirewallRules []RuleSet `json:"source_firewall_rules,omitempty"`
    Vnics []Reference `json:"vnics,omitempty"`
    
}

