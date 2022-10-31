package shared

type StorageUsageDetail struct {
	Size  *int32   `json:"size,omitempty"`
	Sku   *string  `json:"sku,omitempty"`
	Usage *float64 `json:"usage,omitempty"`
}
