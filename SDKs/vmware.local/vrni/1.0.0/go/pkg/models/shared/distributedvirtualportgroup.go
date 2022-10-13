package shared

type DistributedVirtualPortgroup struct {
	DistributedVirtualSwitch *Reference      `json:"distributed_virtual_switch"`
	EntityID                 *string         `json:"entity_id"`
	EntityType               *EntityTypeEnum `json:"entity_type"`
	Name                     *string         `json:"name"`
	VcenterManager           *Reference      `json:"vcenter_manager"`
	VendorID                 *string         `json:"vendor_id"`
}
