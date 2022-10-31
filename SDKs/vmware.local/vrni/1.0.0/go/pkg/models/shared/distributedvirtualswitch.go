package shared

type DistributedVirtualSwitch struct {
	EntityID       *string         `json:"entity_id,omitempty"`
	EntityType     *EntityTypeEnum `json:"entity_type,omitempty"`
	Hosts          []Reference     `json:"hosts,omitempty"`
	Name           *string         `json:"name,omitempty"`
	VcenterManager *Reference      `json:"vcenter_manager,omitempty"`
	VendorID       *string         `json:"vendor_id,omitempty"`
}
