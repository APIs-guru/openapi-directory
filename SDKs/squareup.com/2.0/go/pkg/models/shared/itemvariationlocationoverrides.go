package shared

type ItemVariationLocationOverrides struct {
	InventoryAlertThreshold *int64  `json:"inventory_alert_threshold"`
	InventoryAlertType      *string `json:"inventory_alert_type"`
	LocationID              *string `json:"location_id"`
	PriceMoney              *Money  `json:"price_money"`
	PricingType             *string `json:"pricing_type"`
	TrackInventory          *bool   `json:"track_inventory"`
}
