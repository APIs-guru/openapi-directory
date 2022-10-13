package shared

type ComputeUsageDetail struct {
	Sku   *string  `json:"sku"`
	Usage *float64 `json:"usage"`
}
