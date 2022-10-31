package shared



type CatalogItemVariation struct {
    AvailableForBooking *bool `json:"available_for_booking,omitempty"`
    InventoryAlertThreshold *int64 `json:"inventory_alert_threshold,omitempty"`
    InventoryAlertType *string `json:"inventory_alert_type,omitempty"`
    ItemID *string `json:"item_id,omitempty"`
    ItemOptionValues []CatalogItemOptionValueForItemVariation `json:"item_option_values,omitempty"`
    LocationOverrides []ItemVariationLocationOverrides `json:"location_overrides,omitempty"`
    MeasurementUnitID *string `json:"measurement_unit_id,omitempty"`
    Name *string `json:"name,omitempty"`
    Ordinal *int64 `json:"ordinal,omitempty"`
    PriceMoney *Money `json:"price_money,omitempty"`
    PricingType *string `json:"pricing_type,omitempty"`
    ServiceDuration *int64 `json:"service_duration,omitempty"`
    Sku *string `json:"sku,omitempty"`
    Stockable *bool `json:"stockable,omitempty"`
    StockableConversion *CatalogStockConversion `json:"stockable_conversion,omitempty"`
    TeamMemberIds []string `json:"team_member_ids,omitempty"`
    TrackInventory *bool `json:"track_inventory,omitempty"`
    Upc *string `json:"upc,omitempty"`
    UserData *string `json:"user_data,omitempty"`
    
}

