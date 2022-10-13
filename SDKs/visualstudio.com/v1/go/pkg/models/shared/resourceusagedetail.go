package shared

type ResourceUsageDetail struct {
	Compute []ComputeUsageDetail `json:"compute"`
	Storage []StorageUsageDetail `json:"storage"`
}
