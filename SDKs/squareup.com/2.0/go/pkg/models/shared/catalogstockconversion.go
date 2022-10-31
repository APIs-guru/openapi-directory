package shared



type CatalogStockConversion struct {
    NonstockableQuantity string `json:"nonstockable_quantity"`
    StockableItemVariationID string `json:"stockable_item_variation_id"`
    StockableQuantity string `json:"stockable_quantity"`
    
}

