package shared

type ResourceUsageDetail struct {
	Compute []ComputeUsageDetail `json:"compute,omitempty"`
	Storage []StorageUsageDetail `json:"storage,omitempty"`
}
