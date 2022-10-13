package shared

type BaseIPSet struct {
	DirectDestinationRules   []RuleSet       `json:"direct_destination_rules"`
	DirectSourceRules        []RuleSet       `json:"direct_source_rules"`
	EntityID                 *string         `json:"entity_id"`
	EntityType               *EntityTypeEnum `json:"entity_type"`
	IndirectDestinationRules []RuleSet       `json:"indirect_destination_rules"`
	IndirectSourceRules      []RuleSet       `json:"indirect_source_rules"`
	IPAddresses              []IPV4Address   `json:"ip_addresses"`
	IPNumericRanges          []interface{}   `json:"ip_numeric_ranges"`
	IPRanges                 []interface{}   `json:"ip_ranges"`
	Name                     *string         `json:"name"`
	ParentSecurityGroups     []Reference     `json:"parent_security_groups"`
	TranslatedVMCount        *int32          `json:"translated_vm_count"`
	Vendor                   *string         `json:"vendor"`
	VendorID                 *string         `json:"vendor_id"`
}
