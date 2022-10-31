package shared

type OnDemandPromotionCode struct {
	Code    string  `json:"code"`
	Link    string  `json:"link"`
	MaxUses float64 `json:"max_uses"`
	Uses    float64 `json:"uses"`
}
