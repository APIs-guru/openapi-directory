package shared

type SearchCatalogItemsRequest struct {
	CategoryIds            []string                `json:"category_ids"`
	Cursor                 *string                 `json:"cursor"`
	CustomAttributeFilters []CustomAttributeFilter `json:"custom_attribute_filters"`
	EnabledLocationIds     []string                `json:"enabled_location_ids"`
	Limit                  *int64                  `json:"limit"`
	ProductTypes           []string                `json:"product_types"`
	SortOrder              *string                 `json:"sort_order"`
	StockLevels            []string                `json:"stock_levels"`
	TextFilter             *string                 `json:"text_filter"`
}
