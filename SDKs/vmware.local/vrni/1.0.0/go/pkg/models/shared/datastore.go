package shared

type Datastore struct {
	EntityID       *string         `json:"entity_id"`
	EntityType     *EntityTypeEnum `json:"entity_type"`
	Name           *string         `json:"name"`
	VcenterManager *Reference      `json:"vcenter_manager"`
	VendorID       *string         `json:"vendor_id"`
}
