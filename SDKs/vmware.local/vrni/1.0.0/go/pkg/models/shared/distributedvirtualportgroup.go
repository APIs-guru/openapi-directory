package shared

type DistributedVirtualPortgroup struct {
	DistributedVirtualSwitch *Reference      `json:"distributed_virtual_switch,omitempty"`
	EntityID                 *string         `json:"entity_id,omitempty"`
	EntityType               *EntityTypeEnum `json:"entity_type,omitempty"`
	Name                     *string         `json:"name,omitempty"`
	VcenterManager           *Reference      `json:"vcenter_manager,omitempty"`
	VendorID                 *string         `json:"vendor_id,omitempty"`
}
