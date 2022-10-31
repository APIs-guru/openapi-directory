package shared



type BaseSecurityGroup struct {
    DirectDestinationRules []RuleSet `json:"direct_destination_rules,omitempty"`
    DirectMembers []Reference `json:"direct_members,omitempty"`
    DirectSourceRules []RuleSet `json:"direct_source_rules,omitempty"`
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    ExcludedMembers []Reference `json:"excluded_members,omitempty"`
    IndirectDestinationRules []RuleSet `json:"indirect_destination_rules,omitempty"`
    IndirectSourceRules []RuleSet `json:"indirect_source_rules,omitempty"`
    Members []Reference `json:"members,omitempty"`
    Name *string `json:"name,omitempty"`
    Parents []Reference `json:"parents,omitempty"`
    TranslatedVMCount *int64 `json:"translated_vm_count,omitempty"`
    VendorID *string `json:"vendor_id,omitempty"`
    
}

