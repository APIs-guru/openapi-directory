package shared

type CatalogItemVariation struct {
	AvailableForBooking     *bool                                    `json:"available_for_booking"`
	InventoryAlertThreshold *int64                                   `json:"inventory_alert_threshold"`
	InventoryAlertType      *string                                  `json:"inventory_alert_type"`
	ItemID                  *string                                  `json:"item_id"`
	ItemOptionValues        []CatalogItemOptionValueForItemVariation `json:"item_option_values"`
	LocationOverrides       []ItemVariationLocationOverrides         `json:"location_overrides"`
	MeasurementUnitID       *string                                  `json:"measurement_unit_id"`
	Name                    *string                                  `json:"name"`
	Ordinal                 *int64                                   `json:"ordinal"`
	PriceMoney              *Money                                   `json:"price_money"`
	PricingType             *string                                  `json:"pricing_type"`
	ServiceDuration         *int64                                   `json:"service_duration"`
	Sku                     *string                                  `json:"sku"`
	Stockable               *bool                                    `json:"stockable"`
	StockableConversion     *CatalogStockConversion                  `json:"stockable_conversion"`
	TeamMemberIds           []string                                 `json:"team_member_ids"`
	TrackInventory          *bool                                    `json:"track_inventory"`
	Upc                     *string                                  `json:"upc"`
	UserData                *string                                  `json:"user_data"`
}
