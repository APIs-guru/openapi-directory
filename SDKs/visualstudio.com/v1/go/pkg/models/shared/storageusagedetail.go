package shared

type StorageUsageDetail struct {
	Size  *int32   `json:"size"`
	Sku   *string  `json:"sku"`
	Usage *float64 `json:"usage"`
}
