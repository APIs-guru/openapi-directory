package shared

type SearchCatalogItemsResponse struct {
	Cursor              *string         `json:"cursor"`
	Errors              []Error         `json:"errors"`
	Items               []CatalogObject `json:"items"`
	MatchedVariationIds []string        `json:"matched_variation_ids"`
}
