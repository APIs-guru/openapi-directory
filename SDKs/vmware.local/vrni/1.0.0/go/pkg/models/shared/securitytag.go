package shared



type SecurityTag struct {
    Description *string `json:"description,omitempty"`
    DirectSecurityGroups []Reference `json:"direct_security_groups,omitempty"`
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    Name *string `json:"name,omitempty"`
    NsxManager *Reference `json:"nsx_manager,omitempty"`
    SecurityGroups []Reference `json:"security_groups,omitempty"`
    VendorID *string `json:"vendor_id,omitempty"`
    
}

