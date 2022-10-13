package shared

type BaseVirtualMachine struct {
	DefaultGateway           *string         `json:"default_gateway"`
	DestinationFirewallRules []RuleSet       `json:"destination_firewall_rules"`
	EntityID                 *string         `json:"entity_id"`
	EntityType               *EntityTypeEnum `json:"entity_type"`
	IPAddresses              []IPV4Address   `json:"ip_addresses"`
	IPSets                   []Reference     `json:"ip_sets"`
	Name                     *string         `json:"name"`
	SecurityGroups           []Reference     `json:"security_groups"`
	SourceFirewallRules      []RuleSet       `json:"source_firewall_rules"`
	Vnics                    []Reference     `json:"vnics"`
}
