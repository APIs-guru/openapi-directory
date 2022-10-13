package shared

type SecurityTag struct {
	Description          *string         `json:"description"`
	DirectSecurityGroups []Reference     `json:"direct_security_groups"`
	EntityID             *string         `json:"entity_id"`
	EntityType           *EntityTypeEnum `json:"entity_type"`
	Name                 *string         `json:"name"`
	NsxManager           *Reference      `json:"nsx_manager"`
	SecurityGroups       []Reference     `json:"security_groups"`
	VendorID             *string         `json:"vendor_id"`
}
