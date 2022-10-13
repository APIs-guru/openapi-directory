package shared

type Cluster struct {
	EntityID       *string         `json:"entity_id"`
	EntityType     *EntityTypeEnum `json:"entity_type"`
	Name           *string         `json:"name"`
	NsxManager     *Reference      `json:"nsx_manager"`
	NumCPUCores    *int32          `json:"num_cpu_cores"`
	NumDatastores  *int32          `json:"num_datastores"`
	NumHosts       *int32          `json:"num_hosts"`
	TotalCpus      *int32          `json:"total_cpus"`
	TotalMemory    *int64          `json:"total_memory"`
	VcenterManager *Reference      `json:"vcenter_manager"`
	VendorID       *string         `json:"vendor_id"`
}
