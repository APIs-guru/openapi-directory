package shared

type BaseSecurityGroup struct {
	DirectDestinationRules   []RuleSet       `json:"direct_destination_rules"`
	DirectMembers            []Reference     `json:"direct_members"`
	DirectSourceRules        []RuleSet       `json:"direct_source_rules"`
	EntityID                 *string         `json:"entity_id"`
	EntityType               *EntityTypeEnum `json:"entity_type"`
	ExcludedMembers          []Reference     `json:"excluded_members"`
	IndirectDestinationRules []RuleSet       `json:"indirect_destination_rules"`
	IndirectSourceRules      []RuleSet       `json:"indirect_source_rules"`
	Members                  []Reference     `json:"members"`
	Name                     *string         `json:"name"`
	Parents                  []Reference     `json:"parents"`
	TranslatedVMCount        *int64          `json:"translated_vm_count"`
	VendorID                 *string         `json:"vendor_id"`
}
