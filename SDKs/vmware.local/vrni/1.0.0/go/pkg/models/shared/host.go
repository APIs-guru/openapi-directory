package shared

type Host struct {
	Cluster         *Reference      `json:"cluster"`
	ConnectionState *string         `json:"connection_state"`
	Datastores      []Reference     `json:"datastores"`
	EntityID        *string         `json:"entity_id"`
	EntityType      *EntityTypeEnum `json:"entity_type"`
	MaintenanceMode *string         `json:"maintenance_mode"`
	Name            *string         `json:"name"`
	NsxManager      *Reference      `json:"nsx_manager"`
	ServiceTag      *string         `json:"service_tag"`
	VcenterManager  *Reference      `json:"vcenter_manager"`
	VendorID        *string         `json:"vendor_id"`
	VMCount         *int32          `json:"vm_count"`
	Vmknics         []Reference     `json:"vmknics"`
}
