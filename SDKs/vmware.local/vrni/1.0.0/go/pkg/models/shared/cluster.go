package shared

type Cluster struct {
	EntityID       *string         `json:"entity_id,omitempty"`
	EntityType     *EntityTypeEnum `json:"entity_type,omitempty"`
	Name           *string         `json:"name,omitempty"`
	NsxManager     *Reference      `json:"nsx_manager,omitempty"`
	NumCPUCores    *int32          `json:"num_cpu_cores,omitempty"`
	NumDatastores  *int32          `json:"num_datastores,omitempty"`
	NumHosts       *int32          `json:"num_hosts,omitempty"`
	TotalCpus      *int32          `json:"total_cpus,omitempty"`
	TotalMemory    *int64          `json:"total_memory,omitempty"`
	VcenterManager *Reference      `json:"vcenter_manager,omitempty"`
	VendorID       *string         `json:"vendor_id,omitempty"`
}
