package shared

type EnvironmentUsage struct {
	EndState      *int32               `json:"endState"`
	ID            *string              `json:"id"`
	ResourceUsage *ResourceUsageDetail `json:"resourceUsage"`
	Sku           *Sku                 `json:"sku"`
	Usage         map[string]float64   `json:"usage"`
}
