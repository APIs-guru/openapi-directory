package shared

type ItemVariationLocationOverrides struct {
	InventoryAlertThreshold *int64  `json:"inventory_alert_threshold,omitempty"`
	InventoryAlertType      *string `json:"inventory_alert_type,omitempty"`
	LocationID              *string `json:"location_id,omitempty"`
	PriceMoney              *Money  `json:"price_money,omitempty"`
	PricingType             *string `json:"pricing_type,omitempty"`
	TrackInventory          *bool   `json:"track_inventory,omitempty"`
}
